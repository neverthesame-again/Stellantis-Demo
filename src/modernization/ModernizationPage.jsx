import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { modernizationMockData } from "./modernizationMockData";
import { BUSINESS_AREAS, getRolesForBusinessArea } from "../constants/business-areas";
import { Icon } from "../components/Icon";
import { AdRoleBotWidget } from "../components/AdRoleBotWidget";

export default function ModernizationPage({
  user: propUser,
  selectedRole: initialRole,
  onRoleChange,
  onAreaChange,
}) {
  const { user: authUser, updateActiveContext } = useAuth();
  const navigate = useNavigate();

  const activeUser = propUser || authUser;
  const currentRoleFromAuth =
    activeUser?.activeBusinessArea === "AI for Modernization"
      ? activeUser?.activeRole
      : null;

  const [role, setRole] = useState(
    initialRole || currentRoleFromAuth || "AI Architect"
  );
  const [activeTab, setActiveTab] = useState("overview");

  // Sync role if props or auth context updates externally
  useEffect(() => {
    if (initialRole && initialRole !== role) {
      setRole(initialRole);
    } else if (currentRoleFromAuth && currentRoleFromAuth !== role) {
      setRole(currentRoleFromAuth);
    }
  }, [initialRole, currentRoleFromAuth]);

  const activeRoleData =
    modernizationMockData[role] || modernizationMockData["AI Architect"];
  const { topbar, summary, tabs, stateOfEnvironment, whatRequiresAttention, criticalRisks, tabData } =
    activeRoleData;

  const currentTabData = tabData && tabData[activeTab];

  const handleRoleSelect = (newRole) => {
    setRole(newRole);
    setActiveTab("overview");
    if (updateActiveContext) {
      updateActiveContext("AI for Modernization", newRole);
    }
    if (onRoleChange) onRoleChange(newRole);
  };

  const handleDomainChange = (newDomain) => {
    const domainRoles = getRolesForBusinessArea(newDomain);
    const defaultRole = domainRoles.length > 0 ? domainRoles[0].value : "";
    if (updateActiveContext) {
      updateActiveContext(newDomain, defaultRole);
    }
    if (onAreaChange) {
      onAreaChange(newDomain);
    } else {
      if (newDomain === "AI for Data Engineering") {
        navigate("/data-engineering");
      } else if (newDomain === "AI for Modernization") {
        navigate("/modernization");
      } else {
        navigate("/dashboard");
      }
    }
  };

  return (
    <main className="re-landing-page fade-in">
      {/* Context Selector Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
          background: "var(--surface-card)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          padding: "10px 16px",
          marginBottom: "16px",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "14px", fontWeight: "700", color: "var(--cyan)" }}>
            Active Workspace:
          </span>
          <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
            Viewing as <strong style={{ color: "#3b82f6" }}>{role}</strong> under{" "}
            <strong style={{ color: "#3b82f6" }}>AI for Modernization</strong>
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <label style={{ fontSize: "12px", fontWeight: "600", color: "var(--text-muted)" }}>
              Domain:
            </label>
            <select
              value="AI for Modernization"
              onChange={(e) => handleDomainChange(e.target.value)}
              style={{
                background: "var(--surface-input)",
                color: "var(--text-primary)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "6px 12px",
                fontSize: "12px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              {BUSINESS_AREAS.filter((a) => a.status !== "coming_soon").map((area) => (
                <option
                  key={area.id}
                  value={area.name}
                  style={{ background: "var(--surface-select-option)", color: "var(--text-primary)" }}
                >
                  {area.name}
                </option>
              ))}
            </select>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <label style={{ fontSize: "12px", fontWeight: "600", color: "var(--text-muted)" }}>
              Role:
            </label>
            <select
              value={role}
              onChange={(e) => handleRoleSelect(e.target.value)}
              style={{
                background: "var(--surface-input)",
                color: "var(--text-primary)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "6px 12px",
                fontSize: "12px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              <option value="AI Architect">AI Architect</option>
              <option value="Modernization Engineer">Modernization Engineer</option>
            </select>
          </div>
        </div>
      </div>

      {/* Top Header Bar */}
      <header className="re-topbar">
        <div className="re-brand">
          <h1>{topbar.title}</h1>
          <p>{topbar.subtitle}</p>
        </div>
        <div className="re-top-meta">
          <span>
            Platform<b>{topbar.platform}</b>
          </span>
          <span>
            Shift<b>{topbar.shift}</b>
          </span>
          <span>
            Shift Progress<b>{topbar.shiftProgress}</b>
          </span>
          <span className="re-live-badge">{topbar.statusBadge}</span>
        </div>
      </header>

      {/* Summary Chips Section */}
      <section className="re-summary">
        <div>
          <div className="re-summary-title">{summary.greeting}</div>
          <div className="re-summary-sub">{summary.subtext}</div>
        </div>
        <div className="re-chips" style={{ display: "flex", flexWrap: "nowrap", gap: "10px", alignItems: "stretch" }}>
          {summary.chips.map((chip, idx) => (
            <div
              key={idx}
              style={{
                background: "var(--surface-card)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                padding: "8px 16px",
                minWidth: "130px",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  fontSize: "9px",
                  fontWeight: "800",
                  color: "var(--text-secondary)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                {chip.label}
              </span>
              <span style={{ fontSize: "22px", fontWeight: "800", color: chip.color, lineHeight: 1.1 }}>
                {chip.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Tabs Bar */}
      <nav className="re-tabs">
        {tabs.map((tab) => (
          <span
            key={tab.id}
            className={`re-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
            role="button"
            tabIndex={0}
          >
            {tab.label}
            {tab.badge && <span className="re-badge">{tab.badge}</span>}
          </span>
        ))}
      </nav>

      {/* Tab View 1: Overview Grid View */}
      {activeTab === "overview" && (
        <section className="re-grid fade-in">
          {/* Panel 1: State of Environment */}
          <article className="re-panel">
            <div className="re-panel-head">
              <div className="re-panel-title">{stateOfEnvironment.title}</div>
              <span className="re-panel-chip">{stateOfEnvironment.tag}</span>
            </div>
            <div className="re-panel-body">
              <div className="re-metrics">
                {stateOfEnvironment.metrics.map((m) => (
                  <div key={m.id} className={`re-metric ${m.color}`}>
                    <div className="re-num">{m.count}</div>
                    <div className="re-lbl">{m.label}</div>
                  </div>
                ))}
              </div>
              {stateOfEnvironment.items.map((item) => (
                <div key={item.id} className="re-env-item">
                  <div className="re-row-title">
                    {item.title}
                    <span className={`re-tag ${item.statusType}`}>{item.status}</span>
                  </div>
                  <div className="re-row-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </article>

          {/* Panel 2: What Requires Attention */}
          <article className="re-panel">
            <div className="re-panel-head">
              <div className="re-panel-title">{whatRequiresAttention.title}</div>
              <span className="re-panel-chip">{whatRequiresAttention.tag}</span>
            </div>
            <div className="re-panel-body">
              {whatRequiresAttention.cards.map((card) => (
                <div key={card.id} className="re-attention-card">
                  <div className="re-card-head">
                    {card.title}
                    <span className={`re-severity ${card.severityType}`}>{card.severity}</span>
                  </div>
                  <div className="re-mini">{card.desc}</div>
                  {card.progress !== null && (
                    <div className="re-progress">
                      <div className="re-bar" style={{ width: `${card.progress}%` }}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </article>

          {/* Panel 3: Critical Risks */}
          <article className="re-panel">
            <div className="re-panel-head">
              <div className="re-panel-title">{criticalRisks.title}</div>
              <span className="re-panel-chip">{criticalRisks.tag}</span>
            </div>
            <div className="re-panel-body">
              {criticalRisks.cards.map((card) => (
                <div key={card.id} className="re-risk-card">
                  <div className="re-card-head">
                    {card.title}
                    <span className={`re-severity ${card.severityType}`}>{card.severity}</span>
                  </div>
                  <div className="re-mini">{card.desc}</div>
                </div>
              ))}
            </div>
          </article>
        </section>
      )}

      {/* Tab View 2: Sub-Tabs Card Grid */}
      {activeTab !== "overview" && currentTabData && (
        <section className="fade-in" style={{ marginTop: "16px" }}>
          <div
            style={{
              background: "var(--surface-card)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "16px 20px",
              marginBottom: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h2 style={{ margin: 0, fontSize: "17px", fontWeight: "700", color: "var(--text-primary)" }}>
                {currentTabData.title}
              </h2>
              <span
                style={{
                  background: "rgba(59, 130, 246, 0.15)",
                  color: "#3b82f6",
                  padding: "4px 10px",
                  borderRadius: "8px",
                  fontSize: "11px",
                  fontWeight: "700",
                }}
              >
                {role} · AI for Modernization
              </span>
            </div>
            <p style={{ margin: "4px 0 0 0", fontSize: "13px", color: "var(--text-secondary)" }}>
              {currentTabData.sub}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
              gap: "16px",
            }}
          >
            {currentTabData.items.map((item, idx) => (
              <div
                key={item.id || idx}
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-card)",
                  borderRadius: "12px",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "12px",
                  transition: "transform 0.2s ease, border-color 0.2s ease",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                  {/* Card Header Row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: "700", color: "var(--text-primary)" }}>
                      {item.code || item.build || item.name || `Item #${idx + 1}`}
                    </span>
                    {item.status && (
                      <span
                        className={`re-tag ${
                          item.statusType === "danger"
                            ? "danger"
                            : item.statusType === "warn"
                            ? "warn"
                            : "watch"
                        }`}
                      >
                        {item.status}
                      </span>
                    )}
                  </div>

                  {/* Card Name / Target */}
                  {item.name && (
                    <div style={{ fontSize: "13px", fontWeight: "600", color: "var(--cyan)", marginBottom: "6px" }}>
                      {item.name}
                    </div>
                  )}

                  {/* Description */}
                  {item.desc && (
                    <p style={{ margin: "4px 0", fontSize: "12px", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                      {item.desc}
                    </p>
                  )}

                  {/* Badges and Metrics */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "auto", paddingTop: "8px" }}>
                    {item.target && (
                      <span style={{ background: "rgba(255,255,255,0.06)", padding: "2px 8px", borderRadius: "6px", fontSize: "11px" }}>
                        Target: {item.target}
                      </span>
                    )}
                    {item.duration && (
                      <span style={{ background: "rgba(255,255,255,0.06)", padding: "2px 8px", borderRadius: "6px", fontSize: "11px" }}>
                        {item.duration}
                      </span>
                    )}
                    {item.checks && (
                      <span style={{ background: "rgba(0,210,211,0.15)", color: "var(--cyan)", padding: "2px 8px", borderRadius: "6px", fontSize: "11px", fontWeight: "700" }}>
                        {item.checks}
                      </span>
                    )}
                    {item.reviewScore && (
                      <span style={{ background: "rgba(52,211,153,0.15)", color: "#34d399", padding: "2px 8px", borderRadius: "6px", fontSize: "11px", fontWeight: "700" }}>
                        Score: {item.reviewScore}
                      </span>
                    )}
                    {item.passRate && (
                      <span style={{ background: "rgba(52,211,153,0.15)", color: "#34d399", padding: "2px 8px", borderRadius: "6px", fontSize: "11px", fontWeight: "700" }}>
                        Pass: {item.passRate}
                      </span>
                    )}
                    {item.progress !== undefined && (
                      <span style={{ background: "rgba(151,215,0,0.15)", color: "#97d700", padding: "2px 8px", borderRadius: "6px", fontSize: "11px", fontWeight: "700" }}>
                        Progress: {item.progress}%
                      </span>
                    )}
                  </div>
                </div>

                {/* Deep Blue Execution Box */}
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "10px", marginTop: "6px" }}>
                  <div
                    style={{
                      width: "100%",
                      background: "linear-gradient(135deg, #00205b 0%, #004b87 100%)",
                      color: "#ffffff",
                      border: "1px solid rgba(0, 75, 135, 0.4)",
                      borderRadius: "8px",
                      padding: "8px 14px",
                      fontSize: "12px",
                      fontWeight: "700",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      boxShadow: "0 2px 6px rgba(0, 32, 91, 0.25)",
                      userSelect: "none",
                    }}
                  >
                    <Icon name="zap" size={14} /> Analyze & Execute Transformation
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* AI Assistant Chatbot Grounded to Role Dashboard */}
      <AdRoleBotWidget
        selectedRole={role}
        data={activeRoleData}
        domain="AI for Modernization"
      />
    </main>
  );
}
