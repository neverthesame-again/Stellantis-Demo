// Mock Data for AI for Modernization
// Roles: AI Architect, Modernization Engineer

export const modernizationMockData = {
  "AI Architect": {
    topbar: {
      title: "AI for Modernization · AI Architecture Hub",
      subtitle: "Legacy-to-Cloud Migration, Monolith Decomposition & Architecture Assessment",
      platform: "AI-ARCH",
      shift: "Sprint 14 Cloud Migration | Modernization Domain · Active",
      shiftProgress: "42%",
      statusBadge: "● MODERNIZATION MESH · LIVE",
    },
    summary: {
      greeting: "Good morning, AI Architect",
      subtext: "6 legacy applications evaluated · 3 moved to cloud microservices · 2 ready for deployment",
      chips: [
        { label: "CLOUD MIGRATION", value: "68%", color: "var(--cyan)" },
        { label: "CONTAINER READY", value: "95%", color: "#50c878" },
        { label: "CODE CLEANED", value: "34%", color: "#50c878" },
        { label: "SECURITY AUDIT", value: "98.2%", color: "var(--cyan)" },
      ],
    },
    tabs: [
      { id: "overview", label: "Overview", active: true },
      { id: "decomposition", label: "Decomposition", badge: 4 },
      { id: "code_refactor", label: "Code Refactor", badge: 3 },
      { id: "migration_pipelines", label: "Migration Pipelines", badge: 3 },
    ],
    stateOfEnvironment: {
      title: "Legacy Applications & Cloud Migration Status",
      tag: "Wave 2 Cloud Migration",
      metrics: [
        { id: "m1", count: 2, label: "Blockers", color: "red" },
        { id: "m2", count: 5, label: "In Progress", color: "orange" },
        { id: "m3", count: 12, label: "Cloud Ready", color: "blue" },
        { id: "m4", count: 24, label: "Total Apps", color: "gray" },
      ],
      items: [
        {
          id: "e1",
          title: "Vehicle Telematics System (Old On-Premise Monolith)",
          status: "In Progress",
          statusType: "warn",
          desc: "Splitting the 10-year-old vehicle tracking monolith into 4 fast cloud microservices",
        },
        {
          id: "e2",
          title: "Plant & Dealership Inventory Master Database",
          status: "Migrating",
          statusType: "active",
          desc: "Moving dealership spare parts database from old on-premise servers to modern AWS Cloud storage",
        },
        {
          id: "e3",
          title: "Vehicle Remote Diagnostics Service",
          status: "Cloud Ready",
          statusType: "good",
          desc: "Successfully moved to cloud containers — 4x faster processing for remote car diagnostic alerts",
        },
      ],
    },
    whatRequiresAttention: {
      title: "Architecture Review & Approvals",
      tag: "3 Review Items",
      cards: [
        {
          id: "a1",
          title: "P1 · Dealership Orders Database Sync Verification",
          severity: "Action Needed",
          severityType: "critical",
          desc: "Verify that customer car orders placed in the legacy system copy instantly to the cloud with zero data loss",
          progress: 90,
        },
        {
          id: "a2",
          title: "P2 · Cloud Messaging System Upgrade",
          severity: "Review",
          severityType: "review",
          desc: "Review AI-generated code upgrading old server messaging to modern cloud queues (AWS SQS & Kafka)",
          progress: 65,
        },
        {
          id: "a3",
          title: "P3 · Automated Framework & Security Upgrade",
          severity: "Review",
          severityType: "review",
          desc: "Approve automated AI upgrade of 24 software libraries to the newest version to patch security vulnerabilities",
          progress: 45,
        },
      ],
    },
    criticalRisks: {
      title: "Migration Risks & Blockers",
      tag: "3 System Risks",
      cards: [
        {
          id: "r1",
          title: "Database Sync Delay During Peak Factory Shifts",
          severity: "Critical",
          severityType: "critical",
          desc: "Sync delay between factory servers and the new cloud database increases when all plants operate at peak hours",
        },
        {
          id: "r2",
          title: "Old Hardcoded Server IP Addresses Found in Code",
          severity: "High",
          severityType: "high",
          desc: "Found 14 old server IP addresses hardcoded in legacy files that must be replaced with cloud web addresses",
        },
        {
          id: "r3",
          title: "Cloud Security Certificate Renewal Required",
          severity: "Elevated",
          severityType: "warn",
          desc: "Internal communication certificate between cloud microservices expires in 48 hours; needs automated renewal",
        },
      ],
    },
    tabData: {
      decomposition: {
        title: "Application Modernization Breakdown",
        sub: "Breaking old legacy software into small, fast, independent cloud services",
        items: [
          { id: "dc1", code: "MOD-SVC-01", name: "Vehicle Telematics Service", status: "Completed", statusType: "good", desc: "Separated from the old monolith into a modern cloud service on AWS", target: "AWS Cloud Container", progress: 100, checks: "8/8 Passed" },
          { id: "dc2", code: "MOD-SVC-02", name: "Dealership Portal & Login Service", status: "In Progress", statusType: "warn", desc: "Upgrading legacy dealership login to modern Single Sign-On (SSO)", target: "Cloud Identity / SSO", progress: 65, checks: "5/8 Passed" },
          { id: "dc3", code: "MOD-SVC-03", name: "Global Vehicle Parts Catalog Search", status: "Completed", statusType: "good", desc: "Extracted into high-speed cloud search with instant memory caching", target: "Cloud Microservice", progress: 100, checks: "6/6 Passed" },
          { id: "dc4", code: "MOD-SVC-04", name: "Vehicle Order & Build Matrix Service", status: "In Analysis", statusType: "danger", desc: "Analyzing complex dependencies before decoupling from factory assembly systems", target: "Cloud Microservice", progress: 25, checks: "2/8 Passed" },
        ],
      },
      code_refactor: {
        title: "AI-Assisted Code Refactoring",
        sub: "Using AI to automatically rewrite outdated code into modern, clean, secure standards",
        items: [
          { id: "rf1", code: "REFACTOR-101", name: "Upgrade Deprecated Java Libraries", status: "Completed", statusType: "good", desc: "AI automatically updated 180 outdated code files to the latest secure framework version", valueScore: "98% Clean", reviewScore: "95/100" },
          { id: "rf2", code: "REFACTOR-102", name: "Database Queries Performance Tuning", status: "In Review", statusType: "warn", desc: "AI converted 42 complex old stored procedures into clean modern cloud database code", valueScore: "88% Converted", reviewScore: "88/100" },
          { id: "rf3", code: "REFACTOR-103", name: "Remove Outdated Blocking Network Calls", status: "Ready to Merge", statusType: "good", desc: "AI replaced slow blocking server connections with modern high-speed async connections", valueScore: "100% Converted", reviewScore: "92/100" },
        ],
      },
      migration_pipelines: {
        title: "Automated Cloud Deployment Pipelines",
        sub: "Testing new cloud services side-by-side with the old system before full cutover",
        items: [
          { id: "mp1", build: "PIPE-MOD-01", name: "Gradual Traffic Shift (Canary Deployment)", status: "Passing", statusType: "good", desc: "Safely routes 10% of vehicle traffic to the new cloud system, auto-rolling back if any error occurs", duration: "12m 45s", passRate: "100%" },
          { id: "mp2", build: "PIPE-MOD-02", name: "Real-Time Database Replication Pipeline", status: "Running", statusType: "warn", desc: "Continuously copies factory and vehicle data from on-premise to cloud in real time", duration: "Active Sync", passRate: "99.8%" },
          { id: "mp3", build: "PIPE-MOD-03", name: "Side-by-Side Output Comparison Test", status: "Passing", statusType: "good", desc: "Verifies that the new cloud service produces 100% identical results to the legacy system", duration: "45m 10s", passRate: "99.94% Match" },
        ],
      },
    },
  },

  "Modernization Engineer": {
    topbar: {
      title: "AI for Modernization · Modernization Engineering Workbench",
      subtitle: "Containerization, Cloud Infrastructure as Code & Refactoring Pipelines",
      platform: "MOD-ENG",
      shift: "Migration Delivery Shift | Active Sprint 14",
      shiftProgress: "38%",
      statusBadge: "● MIGRATION AGENT · LIVE",
    },
    summary: {
      greeting: "Good morning, Modernization Engineer",
      subtext: "18 microservices containerized · 3 Helm charts deployed to staging · 0 critical image CVEs",
      chips: [
        { label: "REFACTOR PASS", value: "97.2%", color: "var(--cyan)" },
        { label: "CONTAINER IMAGES", value: "18 Built", color: "#50c878" },
        { label: "TERRAFORM DRIFT", value: "None", color: "#50c878" },
        { label: "STAGING LATENCY", value: "120ms avg", color: "var(--cyan)" },
      ],
    },
    tabs: [
      { id: "overview", label: "Overview", active: true },
      { id: "containers", label: "Containers & K8s", badge: 18 },
      { id: "db_migration", label: "DB Migrations", badge: 5 },
      { id: "refactor_tasks", label: "Refactor Tasks", badge: 8 },
    ],
    stateOfEnvironment: {
      title: "Container & Migration Target Health",
      tag: "EKS Staging Cluster",
      metrics: [
        { id: "m1", count: 0, label: "Failed Builds", color: "green" },
        { id: "m2", count: 3, label: "Building", color: "orange" },
        { id: "m3", count: 18, label: "Running Pods", color: "blue" },
        { id: "m4", count: 5, label: "Namespaces", color: "gray" },
      ],
      items: [
        {
          id: "e1",
          title: "Vehicle Telematics Ingestion Service",
          status: "Healthy",
          statusType: "good",
          desc: "Optimized lightweight container image — 85% smaller size and zero security vulnerabilities",
        },
        {
          id: "e2",
          title: "Dealership Fleet Portal Web Service",
          status: "Healthy",
          statusType: "good",
          desc: "Auto-scaled web service running smoothly on cloud containers with 99.9% uptime",
        },
        {
          id: "e3",
          title: "Parts Catalog API Service",
          status: "Healthy",
          statusType: "good",
          desc: "Fast microservice responding in under 85ms for dealership inventory lookups",
        },
      ],
    },
    whatRequiresAttention: {
      title: "Migration Engineering Tasks",
      tag: "3 Actions Needed",
      cards: [
        {
          id: "a1",
          title: "P1 · Database Backup Rollback Script Verification",
          severity: "Action Needed",
          severityType: "critical",
          desc: "Verify automated safety rollback script before applying new database schema changes",
          progress: 80,
        },
        {
          id: "a2",
          title: "P2 · Cloud Security Certificate Renewal",
          severity: "Review",
          severityType: "review",
          desc: "Automated renewal check for SSL/TLS security certificates on staging web domain",
          progress: 50,
        },
        {
          id: "a3",
          title: "P3 · Faster Cloud Build Caching Optimization",
          severity: "Review",
          severityType: "review",
          desc: "Optimize build cache to speed up developer deployment times by 50%",
          progress: 65,
        },
      ],
    },
    criticalRisks: {
      title: "Cluster & Infrastructure Blockers",
      tag: "3 System Risks",
      cards: [
        {
          id: "r1",
          title: "Cloud Server Spot Capacity Warning",
          severity: "Elevated",
          severityType: "warn",
          desc: "Ensure backup on-demand cloud servers are reserved so jobs never stop during peak hours",
        },
        {
          id: "r2",
          title: "Storage Volume Space Nearing 90% Limit",
          severity: "Critical",
          severityType: "critical",
          desc: "Temporary data storage on staging cluster approaching 90% capacity; needs automated expansion",
        },
        {
          id: "r3",
          title: "Outdated Deployment Template Warning",
          severity: "Elevated",
          severityType: "warn",
          desc: "Update 2 legacy deployment configuration templates to latest Kubernetes standard",
        },
      ],
    },
    tabData: {
      containers: {
        title: "Docker & Kubernetes Deployment Matrix",
        sub: "OCI compliant container images, Helm releases, and pod resource quotas",
        items: [
          { id: "c1", code: "IMG-01", name: "telematics-service:v2.1.0", status: "Deployed", statusType: "good", desc: "Distroless Java 21 image · 140MB · Zero CVEs", target: "EKS Staging", duration: "Up 4d 12h" },
          { id: "c2", code: "IMG-02", name: "dealer-bff:v1.8.4", status: "Running", statusType: "good", desc: "Alpine Node 20 LTS · 98MB · SonarQube verified", target: "EKS Staging", duration: "Up 2d 6h" },
          { id: "c3", code: "IMG-03", name: "auth-gateway:v3.0.0", status: "Deployed", statusType: "good", desc: "Go minimal binary · 32MB · Scratch base container", target: "EKS Staging", duration: "Up 12d" },
        ],
      },
      db_migration: {
        title: "Database Migration & Schema Transformations",
        sub: "Flyway/Liquibase versioned migrations, CDC streaming and replication tracking",
        items: [
          { id: "db1", code: "MIG-014", name: "V14_Add_Telematics_Partitioning", status: "Applied", statusType: "good", desc: "Table partitioned by event_date · Query execution speed improved 3.8x", duration: "2m 14s", checks: "Verified" },
          { id: "db2", code: "MIG-015", name: "V15_Normalize_Dealership_Locations", status: "In Progress", statusType: "warn", desc: "Backfilling normalized dealership coordinates in background transaction", duration: "Running", checks: "72% Complete" },
          { id: "db3", code: "MIG-016", name: "V16_Drop_Deprecated_Legacy_Views", status: "Pending Review", statusType: "review", desc: "Pending confirmation from analytics team before dropping legacy views", duration: "Queued", checks: "Review" },
        ],
      },
      refactor_tasks: {
        title: "Refactor Execution Queue",
        sub: "Automated refactoring snippets and PRs queued for review",
        items: [
          { id: "rt1", code: "TASK-401", name: "Convert Singleton Service to Spring Component", status: "Completed", statusType: "good", desc: "Thread-safe singleton refactored with constructor injection", reviewScore: "100/100" },
          { id: "rt2", code: "TASK-402", name: "Extract S3 Storage Client from FileSystemUtil", status: "Completed", statusType: "good", desc: "Direct file path operations replaced with AWS S3 TransferManager", reviewScore: "96/100" },
        ],
      },
    },
  },
};

// Aliases for compatibility
modernizationMockData["Modernization Architect"] = modernizationMockData["AI Architect"];
modernizationMockData["Migration Engineer"] = modernizationMockData["Modernization Engineer"];
