import React, { useState } from "react";

function App() {
  // TOUS LES useState
  const [selectedRole, setSelectedRole] = useState(null);
  const [page, setPage] = useState("splash");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inpeCode, setInpeCode] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [showSecurityCheck, setShowSecurityCheck] = useState(false);

  // Codes de vérification (simulés - dans la vraie app, ce serait en base de données)
  const validSecurityCodes = {
    institution: "MEDIFLY-ADMIN-001",
    center: "MEDIFLY-ADMIN-002",
    patient: "MEDIFLY-ADMIN-003",
  };

  // États existants (gardés identiques)
  const [requestsFilter, setRequestsFilter] = useState("Pending");
  const [droneFilter, setDroneFilter] = useState("All");
  const [analyticsPeriod, setAnalyticsPeriod] = useState("Week");
  const [showAddCenter, setShowAddCenter] = useState(false);
  const [showCredentials, setShowCredentials] = useState(null);
  const [showRejectReason, setShowRejectReason] = useState(null);
  const [rejectReason, setRejectReason] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [weatherCheck, setWeatherCheck] = useState(null);
  const [searchInventory, setSearchInventory] = useState("");
  const [categoryInventory, setCategoryInventory] = useState("All");
  const [cartItems, setCartItems] = useState([]);
  const [requestPriority, setRequestPriority] = useState("NORMAL");
  const [selectedCat, setSelectedCat] = useState("Antibiotics");
  const [trackingDrone, setTrackingDrone] = useState("all");
  const [confirmedReception, setConfirmedReception] = useState(false);

  // Données (inventory, medications, centers, drones, requests, etc. - identiques à ton code)
  const [inventory] = useState([
    {
      id: 1,
      name: "Amoxicillin",
      category: "Antibiotics",
      stock: 2450,
      unit: "tablets",
      storage: "Room temperature",
      critical: false,
    },
    {
      id: 2,
      name: "Paracetamol",
      category: "Painkillers",
      stock: 5000,
      unit: "tablets",
      storage: "Room temperature",
      critical: false,
    },
    {
      id: 3,
      name: "Insulin",
      category: "Chronic",
      stock: 12,
      unit: "vials",
      storage: "2–8°C refrigerated",
      critical: true,
    },
    {
      id: 4,
      name: "Epinephrine",
      category: "Emergency",
      stock: 3,
      unit: "injections",
      storage: "Refrigerated",
      critical: true,
    },
    {
      id: 5,
      name: "Antimalarial",
      category: "Antibiotics",
      stock: 890,
      unit: "doses",
      storage: "Room temperature",
      critical: false,
    },
    {
      id: 6,
      name: "Vitamin C",
      category: "Supplements",
      stock: 2000,
      unit: "tablets",
      storage: "Room temperature",
      critical: false,
    },
    {
      id: 7,
      name: "Retinol",
      category: "Chronic",
      stock: 120,
      unit: "capsules",
      storage: "Room temperature",
      critical: false,
    },
    {
      id: 8,
      name: "Bandages",
      category: "Emergency",
      stock: 45,
      unit: "packs",
      storage: "Room temperature",
      critical: true,
    },
  ]);

  const [medications] = useState([
    {
      id: 1,
      name: "Amoxicillin",
      category: "Antibiotics",
      stock: 2450,
      unit: "tablets",
      price: 15,
    },
    {
      id: 2,
      name: "Paracetamol",
      category: "Painkillers",
      stock: 5000,
      unit: "tablets",
      price: 5,
    },
    {
      id: 3,
      name: "Insulin",
      category: "Chronic",
      stock: 120,
      unit: "vials",
      price: 120,
    },
    {
      id: 4,
      name: "Epinephrine",
      category: "Emergency",
      stock: 45,
      unit: "injections",
      price: 85,
    },
    {
      id: 5,
      name: "Antimalarial",
      category: "Antibiotics",
      stock: 890,
      unit: "doses",
      price: 25,
    },
    {
      id: 6,
      name: "Vitamin C",
      category: "Supplements",
      stock: 2000,
      unit: "tablets",
      price: 8,
    },
  ]);

  const [centers, setCenters] = useState([
    {
      id: 1,
      name: "Atlas Clinic",
      zone: "Atlas Mountains",
      agent: "Dr. Karim Benali",
      email: "karim@atlasclinic.ma",
      active: true,
      distance: "47 km",
      deliveries: 128,
      eta: "32 min",
      code: "MDF-7A3F-9B2E",
    },
    {
      id: 2,
      name: "Coastal Dispensary",
      zone: "Coastal region",
      agent: "Dr. Fatima Zahra",
      email: "fatima@coastal.ma",
      active: true,
      distance: "52 km",
      deliveries: 94,
      eta: "38 min",
      code: "MDF-4C8D-1F7A",
    },
    {
      id: 3,
      name: "Rural Outpost",
      zone: "Eastern plains",
      agent: "Dr. Youssef Alaoui",
      email: "youssef@rural.ma",
      active: false,
      distance: "78 km",
      deliveries: 45,
      eta: "55 min",
      code: "MDF-9E2B-5H6K",
    },
  ]);

  const [newCenter, setNewCenter] = useState({
    name: "",
    zone: "",
    agent: "",
    email: "",
  });

  const [drones] = useState([
    {
      id: "MDF-07",
      name: "MDF-07",
      status: "Active",
      battery: 98,
      speed: 65,
      altitude: 120,
      mission: "Atlas Clinic",
      eta: "12 min",
      totalMissions: 124,
      totalKm: 3420,
    },
    {
      id: "MDF-03",
      name: "MDF-03",
      status: "Active",
      battery: 67,
      speed: 45,
      altitude: 95,
      mission: "Coastal Dispensary",
      eta: "18 min",
      totalMissions: 89,
      totalKm: 2100,
    },
    {
      id: "MDF-11",
      name: "MDF-11",
      status: "Idle",
      battery: 100,
      speed: 0,
      altitude: 0,
      mission: null,
      eta: null,
      totalMissions: 56,
      totalKm: 980,
    },
    {
      id: "MDF-09",
      name: "MDF-09",
      status: "Charging",
      battery: 45,
      speed: 0,
      altitude: 0,
      mission: null,
      eta: "25 min",
      totalMissions: 42,
      totalKm: 756,
    },
  ]);

  const [requests, setRequests] = useState([
    {
      id: 1,
      center: "Atlas Clinic",
      requester: "Dr. Karim Benali",
      medications: [{ name: "Amoxicillin", quantity: 200 }],
      priority: "URGENT",
      status: "Pending",
      time: "15 min ago",
      created: new Date(),
    },
    {
      id: 2,
      center: "Coastal Dispensary",
      requester: "Dr. Fatima Zahra",
      medications: [{ name: "Insulin", quantity: 10 }],
      priority: "CRITICAL",
      status: "Pending",
      time: "5 min ago",
      created: new Date(),
    },
    {
      id: 3,
      center: "Rural Outpost",
      requester: "Dr. Youssef Alaoui",
      medications: [{ name: "Paracetamol", quantity: 500 }],
      priority: "NORMAL",
      status: "Pending",
      time: "45 min ago",
      created: new Date(),
    },
    {
      id: 4,
      center: "Atlas Clinic",
      requester: "Dr. Karim Benali",
      medications: [{ name: "Insulin", quantity: 5 }],
      priority: "CRITICAL",
      status: "Approved",
      time: "2 hours ago",
      created: new Date(),
    },
    {
      id: 5,
      center: "Coastal Dispensary",
      requester: "Dr. Fatima Zahra",
      medications: [{ name: "Antimalarial", quantity: 100 }],
      priority: "NORMAL",
      status: "Dispatched",
      time: "3 hours ago",
      created: new Date(),
    },
  ]);

  const [myRequests, setMyRequests] = useState([
    {
      id: 1,
      medications: "Amoxicillin 200 tabs",
      status: "Pending",
      priority: "URGENT",
      time: "2 days ago",
    },
    {
      id: 2,
      medications: "Insulin 10 vials",
      status: "In transit",
      priority: "CRITICAL",
      time: "1 day ago",
    },
    {
      id: 3,
      medications: "Paracetamol 500 tabs",
      status: "Delivered",
      priority: "NORMAL",
      time: "3 days ago",
    },
  ]);

  const [myStock] = useState([
    { id: 1, name: "Amoxicillin", stock: 120, unit: "tablets", threshold: 100 },
    { id: 2, name: "Paracetamol", stock: 300, unit: "tablets", threshold: 200 },
    { id: 3, name: "Insulin", stock: 8, unit: "vials", threshold: 10 },
    { id: 4, name: "Bandages", stock: 15, unit: "packs", threshold: 20 },
  ]);

  const [delivery, setDelivery] = useState({
    active: true,
    drone: "MDF-07",
    medications: ["Amoxicillin 200 tabs", "Insulin 10 vials"],
    progress: 65,
    eta: 12,
    droneId: "MDF-07",
  });

  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type) => {
    const newNotif = {
      id: Date.now(),
      message,
      type,
      read: false,
      time: new Date().toLocaleTimeString(),
    };
    setNotifications((prev) => [newNotif, ...prev]);
    setTimeout(() => {
      setNotifications((prev) =>
        prev.map((n) => (n.id === newNotif.id ? { ...n, read: true } : n))
      );
    }, 5000);
  };

  const generateCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return `MDF-${chars[Math.floor(Math.random() * 36)]}${
      chars[Math.floor(Math.random() * 36)]
    }${chars[Math.floor(Math.random() * 36)]}${
      chars[Math.floor(Math.random() * 36)]
    }-${chars[Math.floor(Math.random() * 36)]}${
      chars[Math.floor(Math.random() * 36)]
    }${chars[Math.floor(Math.random() * 36)]}${
      chars[Math.floor(Math.random() * 36)]
    }`;
  };

  const checkWeather = () => {
    const conditions = [
      {
        safe: true,
        message: "✅ Weather clear, wind 12 km/h - Drone can take off",
        color: "#27A76A",
      },
      {
        safe: false,
        message: "⛔ Strong winds 55 km/h - Flight blocked for safety",
        color: "#E24B4A",
      },
      {
        safe: true,
        message: "✅ Light rain, visibility good - Safe to fly",
        color: "#27A76A",
      },
      {
        safe: false,
        message: "⛔ Thunderstorm alert - No fly zone activated",
        color: "#E24B4A",
      },
    ];
    return conditions[Math.floor(Math.random() * conditions.length)];
  };

  const handleApprove = (requestId) => {
    const weather = checkWeather();
    setWeatherCheck(weather);
    if (weather.safe) {
      setRequests((prev) =>
        prev.map((r) => (r.id === requestId ? { ...r, status: "Approved" } : r))
      );
      addNotification(
        `✅ Request #${requestId} approved. Drone dispatched!`,
        "success"
      );
      setTimeout(() => setWeatherCheck(null), 3000);
    } else {
      addNotification(`⚠️ Dispatch blocked: ${weather.message}`, "warning");
    }
  };

  const handleReject = (requestId) => {
    if (rejectReason.trim()) {
      setRequests((prev) =>
        prev.map((r) => (r.id === requestId ? { ...r, status: "Rejected" } : r))
      );
      addNotification(
        `❌ Request #${requestId} rejected. Reason: ${rejectReason}`,
        "error"
      );
      setShowRejectReason(null);
      setRejectReason("");
    } else {
      alert("Please provide a reason for rejection");
    }
  };

  const handleAddCenter = () => {
    const code = generateCode();
    const newCenterData = {
      id: centers.length + 1,
      ...newCenter,
      active: true,
      distance: "0 km",
      deliveries: 0,
      eta: "0 min",
      code,
    };
    setCenters([...centers, newCenterData]);
    setShowCredentials(newCenterData);
    setShowAddCenter(false);
    setNewCenter({ name: "", zone: "", agent: "", email: "" });
    addNotification(
      `🏥 New center "${newCenter.name}" created. Access code: ${code}`,
      "info"
    );
  };

  const addToCart = (med) => {
    setCartItems([...cartItems, { ...med, quantity: 1 }]);
    addNotification(`📦 Added ${med.name} to cart`, "info");
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((i) => i.id !== id));
  };

  const updateQuantity = (id, qty) => {
    setCartItems(
      cartItems.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(1, qty) } : i
      )
    );
  };

  const submitRequest = () => {
    const newReq = {
      id: Date.now(),
      center: "Atlas Clinic",
      requester: "Dr. Karim",
      medications: cartItems.map((i) => ({
        name: i.name,
        quantity: i.quantity,
      })),
      priority: requestPriority,
      status: "Pending",
      time: "just now",
      created: new Date(),
    };
    setRequests([newReq, ...requests]);
    setMyRequests([
      {
        id: Date.now(),
        medications: cartItems.map((i) => `${i.name} ${i.quantity}`).join(", "),
        status: "Pending",
        priority: requestPriority,
        time: "just now",
      },
      ...myRequests,
    ]);
    addNotification(
      `✅ Request submitted with ${requestPriority} priority`,
      "success"
    );
    setCartItems([]);
    setPage("dashboard");
  };

  const handleConfirmReception = () => {
    setConfirmedReception(true);
    setDelivery({ ...delivery, active: false });
    addNotification(
      "✅ Delivery confirmed! Stock updated automatically.",
      "success"
    );
  };

  // Nouvelle fonction de vérification de sécurité
  const handleSecurityCheck = () => {
    const expectedCode = validSecurityCodes[selectedRole];
    if (securityCode === expectedCode) {
      setPage("dashboard");
      setShowSecurityCheck(false);
      setSecurityCode("");
      addNotification(
        `✅ Welcome to Medifly! You are connected as ${selectedRole}`,
        "success"
      );
    } else {
      alert("⛔ Invalid security code. Please contact Medifly administrator.");
    }
  };

  const SmallLogo = () => (
    <svg width="32" height="32" viewBox="0 0 100 100">
      <rect x="35" y="42" width="30" height="16" rx="4" fill="#1A4E9F" />
      <line x1="35" y1="45" x2="18" y2="32" stroke="#1A4E9F" strokeWidth="3" />
      <line x1="65" y1="45" x2="82" y2="32" stroke="#1A4E9F" strokeWidth="3" />
      <circle cx="18" cy="32" r="7" fill="#5BA4D4" />
      <circle cx="82" cy="32" r="7" fill="#5BA4D4" />
      <rect x="46" y="61" width="8" height="16" rx="2" fill="#E24B4A" />
      <rect x="41" y="65" width="18" height="8" rx="2" fill="#E24B4A" />
    </svg>
  );

  const Header = ({ title, onBack, onLogout }) => (
    <div
      style={{
        backgroundColor: "white",
        padding: "16px",
        borderBottom: "1px solid #e0e0e0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <SmallLogo />
        <span style={{ fontWeight: "bold", fontSize: "20px" }}>
          <span style={{ color: "#1A4E9F" }}>Medi</span>
          <span style={{ color: "#5BA4D4", fontStyle: "italic" }}>fly</span>
        </span>
        {title && (
          <span style={{ fontSize: "18px", color: "#666" }}>/ {title}</span>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            style={{
              background: "none",
              border: "none",
              fontSize: "20px",
              cursor: "pointer",
              position: "relative",
            }}
          >
            🔔
            {notifications.filter((n) => !n.read).length > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-5px",
                  backgroundColor: "#E24B4A",
                  color: "white",
                  borderRadius: "10px",
                  padding: "2px 6px",
                  fontSize: "10px",
                }}
              >
                {notifications.filter((n) => !n.read).length}
              </span>
            )}
          </button>
          {showNotifications && (
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "35px",
                width: "280px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                zIndex: 100,
                maxHeight: "300px",
                overflowY: "auto",
              }}
            >
              {notifications.length === 0 ? (
                <p
                  style={{
                    padding: "12px",
                    textAlign: "center",
                    color: "#999",
                  }}
                >
                  No notifications
                </p>
              ) : (
                notifications.map((n) => (
                  <div
                    key={n.id}
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #eee",
                      backgroundColor: n.read ? "white" : "#F0F7FF",
                    }}
                  >
                    <p style={{ fontSize: "12px", margin: 0 }}>{n.message}</p>
                    <p
                      style={{
                        fontSize: "10px",
                        color: "#999",
                        marginTop: "4px",
                      }}
                    >
                      {n.time}
                    </p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
        {onBack && (
          <button
            onClick={onBack}
            style={{
              color: "#1A4E9F",
              background: "none",
              border: "none",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            ← Back
          </button>
        )}
        {onLogout && (
          <button
            onClick={onLogout}
            style={{
              color: "#E24B4A",
              background: "none",
              border: "none",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );

  // ========== PAGE 1 : SPLASH (simplifiée, sans stats) ==========
  if (page === "splash") {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#0D2E6B",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg width="120" height="120" viewBox="0 0 100 100">
              <rect
                x="35"
                y="42"
                width="30"
                height="16"
                rx="4"
                fill="#1A4E9F"
              />
              <line
                x1="35"
                y1="45"
                x2="18"
                y2="32"
                stroke="#1A4E9F"
                strokeWidth="3"
              />
              <line
                x1="65"
                y1="45"
                x2="82"
                y2="32"
                stroke="#1A4E9F"
                strokeWidth="3"
              />
              <line
                x1="35"
                y1="55"
                x2="18"
                y2="68"
                stroke="#1A4E9F"
                strokeWidth="3"
              />
              <line
                x1="65"
                y1="55"
                x2="82"
                y2="68"
                stroke="#1A4E9F"
                strokeWidth="3"
              />
              <circle cx="18" cy="32" r="7" fill="#5BA4D4" />
              <circle cx="82" cy="32" r="7" fill="#5BA4D4" />
              <circle cx="18" cy="68" r="7" fill="#5BA4D4" />
              <circle cx="82" cy="68" r="7" fill="#5BA4D4" />
              <rect x="42" y="48" width="16" height="10" rx="2" fill="white" />
              <rect x="46" y="61" width="8" height="16" rx="2" fill="#E24B4A" />
              <rect x="41" y="65" width="18" height="8" rx="2" fill="#E24B4A" />
            </svg>
          </div>
          <h1 style={{ fontSize: "48px", margin: "20px 0 10px 0" }}>
            <span style={{ color: "#5BA4D4" }}>Medi</span>
            <span style={{ color: "white", fontStyle: "italic" }}>fly</span>
          </h1>
          <p
            style={{ color: "#5BA4D4", fontSize: "18px", marginBottom: "40px" }}
          >
            When your medications fly to you
          </p>
          <button
            onClick={() => setPage("roleChoice")}
            style={{
              backgroundColor: "#1A4E9F",
              color: "white",
              padding: "14px 32px",
              border: "none",
              borderRadius: "30px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Get Started →
          </button>
        </div>
      </div>
    );
  }

  // ========== PAGE 2 : CHOIX DU RÔLE (questionnaire) ==========
  if (page === "roleChoice") {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#F5F7FA",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "28px",
            padding: "32px",
            maxWidth: "450px",
            width: "100%",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <SmallLogo />
            <h2 style={{ marginTop: "16px", fontSize: "24px" }}>
              Who are you?
            </h2>
            <p style={{ color: "#666", marginTop: "8px" }}>
              Please select your profile to continue
            </p>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <div
              onClick={() => setSelectedRole("institution")}
              style={{
                backgroundColor:
                  selectedRole === "institution" ? "#E8F0FE" : "white",
                border:
                  selectedRole === "institution"
                    ? "2px solid #1A4E9F"
                    : "1px solid #ddd",
                borderRadius: "16px",
                padding: "20px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "25px",
                  backgroundColor: "#1A4E9F",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                }}
              >
                🏥
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontWeight: "bold", margin: 0 }}>
                  Healthcare Institution
                </h3>
                <p
                  style={{
                    color: "#666",
                    margin: "5px 0 0 0",
                    fontSize: "14px",
                  }}
                >
                  Hospital or central pharmacy
                </p>
              </div>
              {selectedRole === "institution" && (
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "12px",
                    backgroundColor: "#1A4E9F",
                    color: "white",
                    textAlign: "center",
                    lineHeight: "24px",
                  }}
                >
                  ✓
                </div>
              )}
            </div>

            <div
              onClick={() => setSelectedRole("center")}
              style={{
                backgroundColor:
                  selectedRole === "center" ? "#E8F0FE" : "white",
                border:
                  selectedRole === "center"
                    ? "2px solid #5BA4D4"
                    : "1px solid #ddd",
                borderRadius: "16px",
                padding: "20px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "25px",
                  backgroundColor: "#5BA4D4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                }}
              >
                📍
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontWeight: "bold", margin: 0 }}>
                  Distribution Center
                </h3>
                <p
                  style={{
                    color: "#666",
                    margin: "5px 0 0 0",
                    fontSize: "14px",
                  }}
                >
                  Rural or isolated zone
                </p>
              </div>
              {selectedRole === "center" && (
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "12px",
                    backgroundColor: "#5BA4D4",
                    color: "white",
                    textAlign: "center",
                    lineHeight: "24px",
                  }}
                >
                  ✓
                </div>
              )}
            </div>

            <div
              onClick={() => setSelectedRole("patient")}
              style={{
                backgroundColor:
                  selectedRole === "patient" ? "#E8F0FE" : "white",
                border:
                  selectedRole === "patient"
                    ? "2px solid #27A76A"
                    : "1px solid #ddd",
                borderRadius: "16px",
                padding: "20px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "25px",
                  backgroundColor: "#27A76A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                }}
              >
                👤
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontWeight: "bold", margin: 0 }}>Patient</h3>
                <p
                  style={{
                    color: "#666",
                    margin: "5px 0 0 0",
                    fontSize: "14px",
                  }}
                >
                  Individual requiring medication delivery
                </p>
              </div>
              {selectedRole === "patient" && (
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "12px",
                    backgroundColor: "#27A76A",
                    color: "white",
                    textAlign: "center",
                    lineHeight: "24px",
                  }}
                >
                  ✓
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setPage("login")}
            disabled={!selectedRole}
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor:
                selectedRole === "institution"
                  ? "#1A4E9F"
                  : selectedRole === "center"
                  ? "#5BA4D4"
                  : "#27A76A",
              color: "white",
              border: "none",
              borderRadius: "16px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: selectedRole ? "pointer" : "not-allowed",
              marginTop: "24px",
              opacity: selectedRole ? 1 : 0.5,
            }}
          >
            Continue as{" "}
            {selectedRole === "institution"
              ? "Institution"
              : selectedRole === "center"
              ? "Distribution Center"
              : "Patient"}
          </button>

          <button
            onClick={() => setPage("splash")}
            style={{
              marginTop: "16px",
              color: "#999",
              background: "none",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            ← Back
          </button>
        </div>
      </div>
    );
  }

  // ========== PAGE 3 : LOGIN + INPE CODE ==========
  if (page === "login") {
    const handleLoginSubmit = () => {
      if (email && password && inpeCode) {
        setShowSecurityCheck(true);
        setPage("securityCheck");
      } else {
        alert("Please fill in all fields: Email, Password, and INPE Code");
      }
    };

    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#F5F7FA",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "28px",
            padding: "32px",
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <SmallLogo />
            <h2 style={{ marginTop: "16px", fontSize: "24px" }}>
              Authentication
            </h2>
            <span
              style={{
                display: "inline-block",
                padding: "4px 16px",
                borderRadius: "20px",
                backgroundColor:
                  selectedRole === "institution"
                    ? "#1A4E9F"
                    : selectedRole === "center"
                    ? "#5BA4D4"
                    : "#27A76A",
                color: "white",
                fontSize: "12px",
                marginTop: "8px",
              }}
            >
              {selectedRole === "institution"
                ? "Healthcare Institution"
                : selectedRole === "center"
                ? "Distribution Center"
                : "Patient"}
            </span>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
              }}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "14px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                fontSize: "14px",
              }}
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
              }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "14px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                fontSize: "14px",
              }}
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
              }}
            >
              INPE Code
            </label>
            <input
              type="text"
              placeholder="XXXX-XXXX-XXXX"
              value={inpeCode}
              onChange={(e) => setInpeCode(e.target.value)}
              style={{
                width: "100%",
                padding: "14px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                fontSize: "14px",
                fontFamily: "monospace",
              }}
            />
            <p style={{ fontSize: "11px", color: "#999", marginTop: "5px" }}>
              Your individual medical identification code
            </p>
          </div>

          <button
            onClick={handleLoginSubmit}
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor:
                selectedRole === "institution"
                  ? "#1A4E9F"
                  : selectedRole === "center"
                  ? "#5BA4D4"
                  : "#27A76A",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Verify Identity
          </button>

          <button
            onClick={() => setPage("roleChoice")}
            style={{
              marginTop: "16px",
              color: "#999",
              background: "none",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            ← Back
          </button>
        </div>
      </div>
    );
  }

  // ========== PAGE 4 : VÉRIFICATION SÉCURITÉ (CODE MEDIFLY) ==========
  if (page === "securityCheck") {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#F5F7FA",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "28px",
            padding: "32px",
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#0D2E6B",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              <span style={{ fontSize: "30px" }}>🔐</span>
            </div>
            <h2 style={{ marginTop: "16px", fontSize: "22px" }}>
              Security Verification
            </h2>
            <p style={{ color: "#666", fontSize: "14px", marginTop: "8px" }}>
              Enter the unique code provided by Medifly team
            </p>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
              }}
            >
              Medifly Security Code
            </label>
            <input
              type="text"
              placeholder="MEDIFLY-ADMIN-XXX"
              value={securityCode}
              onChange={(e) => setSecurityCode(e.target.value.toUpperCase())}
              style={{
                width: "100%",
                padding: "14px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                fontSize: "14px",
                fontFamily: "monospace",
                textAlign: "center",
                letterSpacing: "1px",
              }}
            />
            <p
              style={{
                fontSize: "11px",
                color: "#999",
                marginTop: "8px",
                textAlign: "center",
              }}
            >
              {selectedRole === "institution" &&
                "Expected code: MEDIFLY-ADMIN-001"}
              {selectedRole === "center" && "Expected code: MEDIFLY-ADMIN-002"}
              {selectedRole === "patient" && "Expected code: MEDIFLY-ADMIN-003"}
            </p>
          </div>

          <button
            onClick={handleSecurityCheck}
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#1A4E9F",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Verify & Access Dashboard
          </button>

          <button
            onClick={() => {
              setPage("login");
              setShowSecurityCheck(false);
            }}
            style={{
              marginTop: "16px",
              color: "#999",
              background: "none",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            ← Back
          </button>
        </div>
      </div>
    );
  }

  // ========== PATIENT DASHBOARD (simple, sans fonctionnalités médicales) ==========
  if (page === "dashboard" && selectedRole === "patient") {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#F5F7FA",
          padding: "16px",
        }}
      >
        <Header
          title="Patient Portal"
          onLogout={() => {
            setPage("splash");
            setSelectedRole(null);
            setEmail("");
            setPassword("");
            setInpeCode("");
          }}
        />
        <div style={{ padding: "20px", textAlign: "center" }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "24px",
              padding: "40px",
              marginBottom: "20px",
            }}
          >
            <span style={{ fontSize: "64px" }}>👤</span>
            <h2 style={{ marginTop: "16px" }}>Welcome, Patient</h2>
            <p style={{ color: "#666", marginTop: "8px" }}>
              Connected with email: {email}
            </p>
            <div
              style={{
                backgroundColor: "#E8F0FE",
                padding: "20px",
                borderRadius: "16px",
                marginTop: "24px",
              }}
            >
              <p style={{ fontWeight: "bold", color: "#1A4E9F" }}>
                📋 Your Information
              </p>
              <p style={{ fontSize: "14px", marginTop: "12px" }}>
                INPE Code: <strong>{inpeCode}</strong>
              </p>
              <p style={{ fontSize: "14px" }}>
                Medifly Security Code: <strong>{securityCode}</strong>
              </p>
            </div>
            <p style={{ fontSize: "14px", color: "#999", marginTop: "20px" }}>
              This portal allows you to track your medication deliveries.
              <br />
              For any medical request, please contact your healthcare provider.
            </p>
          </div>
          <button
            onClick={() => setPage("tracking")}
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#5BA4D4",
              color: "white",
              border: "none",
              borderRadius: "16px",
              cursor: "pointer",
              marginBottom: "10px",
            }}
          >
            🗺️ Track My Delivery
          </button>
          <button
            onClick={() => {
              addNotification(
                "📞 A representative will contact you shortly",
                "info"
              );
            }}
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#27A76A",
              color: "white",
              border: "none",
              borderRadius: "16px",
              cursor: "pointer",
            }}
          >
            💬 Contact Medical Support
          </button>
        </div>
      </div>
    );
  }

  // ========== TOUTES LES AUTRES PAGES (institution, center) restent identiques ==========
  // DASHBOARD INSTITUTION
  if (page === "dashboard" && selectedRole === "institution") {
    const pendingCount = requests.filter((r) => r.status === "Pending").length;
    const activeDrones = drones.filter((d) => d.status === "Active").length;
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#F5F7FA",
          paddingBottom: "80px",
        }}
      >
        <Header
          title="Dashboard"
          onLogout={() => {
            setPage("splash");
            setSelectedRole(null);
          }}
        />
        <div style={{ padding: "16px" }}>
          <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
            🏥 Casablanca Central Hospital
          </h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "16px",
                borderRadius: "16px",
              }}
            >
              <p style={{ color: "#666", fontSize: "12px" }}>
                Deliveries today
              </p>
              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#1A4E9F",
                }}
              >
                8
              </p>
            </div>
            <div
              style={{
                backgroundColor: "white",
                padding: "16px",
                borderRadius: "16px",
              }}
            >
              <p style={{ color: "#666", fontSize: "12px" }}>
                Pending requests
              </p>
              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#E24B4A",
                }}
              >
                {pendingCount}
              </p>
            </div>
            <div
              style={{
                backgroundColor: "white",
                padding: "16px",
                borderRadius: "16px",
              }}
            >
              <p style={{ color: "#666", fontSize: "12px" }}>
                Avg. delivery time
              </p>
              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#1A4E9F",
                }}
              >
                24 min
              </p>
            </div>
            <div
              style={{
                backgroundColor: "white",
                padding: "16px",
                borderRadius: "16px",
              }}
            >
              <p style={{ color: "#666", fontSize: "12px" }}>Drones active</p>
              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#27A76A",
                }}
              >
                {activeDrones}/{drones.length}
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "24px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => setPage("requests")}
              style={{
                padding: "10px 16px",
                backgroundColor: "#1A4E9F",
                color: "white",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              📋 Requests
            </button>
            <button
              onClick={() => setPage("inventory")}
              style={{
                padding: "10px 16px",
                backgroundColor: "#5BA4D4",
                color: "white",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              💊 Inventory
            </button>
            <button
              onClick={() => setPage("droneFleet")}
              style={{
                padding: "10px 16px",
                backgroundColor: "#5BA4D4",
                color: "white",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              🚁 Drone Fleet
            </button>
            <button
              onClick={() => setPage("analytics")}
              style={{
                padding: "10px 16px",
                backgroundColor: "#5BA4D4",
                color: "white",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              📊 Analytics
            </button>
            <button
              onClick={() => setPage("manageCenters")}
              style={{
                padding: "10px 16px",
                backgroundColor: "#5BA4D4",
                color: "white",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              🏥 Centers
            </button>
          </div>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "16px",
              marginBottom: "24px",
            }}
          >
            <h2 style={{ fontSize: "18px", marginBottom: "12px" }}>
              📋 Pending requests
            </h2>
            {requests
              .filter((r) => r.status === "Pending")
              .slice(0, 3)
              .map((req) => (
                <div
                  key={req.id}
                  style={{
                    padding: "12px",
                    marginBottom: "10px",
                    borderRadius: "12px",
                    borderLeft: `4px solid ${
                      req.priority === "CRITICAL"
                        ? "#E24B4A"
                        : req.priority === "URGENT"
                        ? "#BA7517"
                        : "#27A76A"
                    }`,
                    backgroundColor:
                      req.priority === "CRITICAL"
                        ? "#FFF5F5"
                        : req.priority === "URGENT"
                        ? "#FFF8F0"
                        : "#F0FFF4",
                  }}
                >
                  <div>
                    <p style={{ fontWeight: "bold" }}>{req.center}</p>
                    <p style={{ fontSize: "12px", color: "#666" }}>
                      {req.medications
                        .map((m) => `${m.name} ${m.quantity}`)
                        .join(", ")}
                    </p>
                  </div>
                  <div
                    style={{ display: "flex", gap: "8px", marginTop: "8px" }}
                  >
                    <button
                      onClick={() => setShowRejectReason(req.id)}
                      style={{
                        padding: "6px 12px",
                        backgroundColor: "#E24B4A",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => handleApprove(req.id)}
                      style={{
                        padding: "6px 12px",
                        backgroundColor: "#27A76A",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                    >
                      Approve & Dispatch
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "16px",
              marginBottom: "24px",
            }}
          >
            <h2 style={{ fontSize: "18px", marginBottom: "12px" }}>
              🚁 Drone fleet
            </h2>
            {drones.map((drone) => (
              <div
                key={drone.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                <div>
                  <p style={{ fontWeight: "bold" }}>{drone.name}</p>
                  {drone.mission && (
                    <p style={{ fontSize: "12px", color: "#666" }}>
                      {drone.mission}
                    </p>
                  )}
                </div>
                <div>
                  <span
                    style={{
                      color:
                        drone.status === "Active"
                          ? "#27A76A"
                          : drone.status === "Idle"
                          ? "#666"
                          : "#BA7517",
                    }}
                  >
                    {drone.status}
                  </span>
                  <div
                    style={{
                      width: "60px",
                      height: "4px",
                      backgroundColor: "#e0e0e0",
                      borderRadius: "2px",
                      marginTop: "4px",
                    }}
                  >
                    <div
                      style={{
                        width: `${drone.battery}%`,
                        height: "4px",
                        backgroundColor: "#1A4E9F",
                        borderRadius: "2px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "16px",
            }}
          >
            <h2 style={{ fontSize: "18px", marginBottom: "12px" }}>
              ⚠️ Critical stock alerts
            </h2>
            {inventory
              .filter((i) => i.critical)
              .map((item) => (
                <div
                  key={item.id}
                  style={{
                    padding: "10px",
                    backgroundColor: "#FFF5F5",
                    borderRadius: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <p style={{ fontWeight: "bold" }}>{item.name}</p>
                  <p style={{ fontSize: "12px" }}>
                    Only {item.stock} {item.unit} left
                  </p>
                </div>
              ))}
          </div>
          {weatherCheck && (
            <div
              style={{
                position: "fixed",
                bottom: "20px",
                left: "20px",
                right: "20px",
                backgroundColor: weatherCheck.color,
                color: "white",
                padding: "12px",
                borderRadius: "12px",
                textAlign: "center",
                zIndex: 100,
              }}
            >
              {weatherCheck.message}
            </div>
          )}
          {showRejectReason && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                zIndex: 200,
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "24px",
                  padding: "24px",
                  width: "100%",
                  maxWidth: "350px",
                }}
              >
                <h3>Reason for rejection</h3>
                <textarea
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                  placeholder="Enter reason..."
                  style={{
                    width: "100%",
                    padding: "12px",
                    margin: "10px 0",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    minHeight: "80px",
                  }}
                />
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={() => handleReject(showRejectReason)}
                    style={{
                      flex: 1,
                      padding: "12px",
                      backgroundColor: "#E24B4A",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => {
                      setShowRejectReason(null);
                      setRejectReason("");
                    }}
                    style={{
                      flex: 1,
                      padding: "12px",
                      backgroundColor: "#999",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // CENTER DASHBOARD
  if (page === "dashboard" && selectedRole === "center") {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#F5F7FA",
          padding: "16px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "16px",
            borderRadius: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <SmallLogo />
            <span style={{ fontWeight: "bold" }}>Medifly - Atlas Clinic</span>
          </div>
          <button
            onClick={() => {
              setPage("splash");
              setSelectedRole(null);
            }}
            style={{
              color: "#E24B4A",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
        <button
          onClick={() => {
            const newReq = {
              id: Date.now(),
              center: "Atlas Clinic",
              requester: "Dr. Karim",
              medications: [{ name: "Epinephrine", quantity: 50 }],
              priority: "CRITICAL",
              status: "Pending",
              time: "just now",
              created: new Date(),
            };
            setRequests([newReq, ...requests]);
            addNotification(
              "🚨 SOS CRITICAL request sent to institution!",
              "critical"
            );
          }}
          style={{
            width: "100%",
            backgroundColor: "#E24B4A",
            color: "white",
            padding: "16px",
            borderRadius: "16px",
            fontWeight: "bold",
            border: "none",
            marginBottom: "16px",
            cursor: "pointer",
          }}
        >
          🚨 SOS Emergency
        </button>
        {delivery.active && (
          <div
            style={{
              backgroundColor: "#1A4E9F",
              color: "white",
              padding: "20px",
              borderRadius: "16px",
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            <p>🚁 {delivery.drone}</p>
            <p style={{ fontSize: "12px" }}>
              {delivery.medications.join(", ")}
            </p>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>
              ETA: {delivery.eta} min
            </p>
            <div
              style={{
                width: "100%",
                backgroundColor: "rgba(255,255,255,0.3)",
                height: "8px",
                borderRadius: "4px",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  width: `${delivery.progress}%`,
                  backgroundColor: "white",
                  height: "8px",
                  borderRadius: "4px",
                }}
              ></div>
            </div>
          </div>
        )}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "16px",
            marginBottom: "16px",
          }}
        >
          <h3>📋 My Requests</h3>
          {myRequests.map((req) => (
            <div
              key={req.id}
              style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}
            >
              <div>
                <span style={{ fontWeight: "bold" }}>{req.medications}</span>
                <span
                  style={{
                    float: "right",
                    color:
                      req.status === "Pending"
                        ? "#BA7517"
                        : req.status === "In transit"
                        ? "#1A4E9F"
                        : "#27A76A",
                  }}
                >
                  {req.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "16px",
            marginBottom: "16px",
          }}
        >
          <h3>📦 Local Stock Overview</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
            }}
          >
            {myStock.map((item) => (
              <div key={item.id}>
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  {item.name}
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: item.stock < item.threshold ? "#E24B4A" : "#27A76A",
                  }}
                >
                  {item.stock} {item.unit}
                </p>
                <div
                  style={{
                    width: "100%",
                    height: "4px",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "2px",
                  }}
                >
                  <div
                    style={{
                      width: `${(item.stock / item.threshold) * 100}%`,
                      height: "4px",
                      backgroundColor:
                        item.stock < item.threshold ? "#E24B4A" : "#27A76A",
                      borderRadius: "2px",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => setPage("newRequest")}
          style={{
            width: "100%",
            backgroundColor: "#5BA4D4",
            color: "white",
            padding: "14px",
            borderRadius: "16px",
            border: "none",
            cursor: "pointer",
          }}
        >
          + New medication request
        </button>
        <button
          onClick={() => setPage("tracking")}
          style={{
            width: "100%",
            marginTop: "10px",
            backgroundColor: "#1A4E9F",
            color: "white",
            padding: "14px",
            borderRadius: "16px",
            border: "none",
            cursor: "pointer",
          }}
        >
          🗺️ Live Tracking
        </button>
        <button
          onClick={() => setPage("reception")}
          style={{
            width: "100%",
            marginTop: "10px",
            backgroundColor: "#5BA4D4",
            color: "white",
            padding: "14px",
            borderRadius: "16px",
            border: "none",
            cursor: "pointer",
          }}
        >
          📷 Scan QR Reception
        </button>
      </div>
    );
  }

  // REQUESTS PAGE
  if (page === "requests") {
    const filteredRequests = requests.filter((r) =>
      requestsFilter === "All" ? true : r.status === requestsFilter
    );
    const sortedRequests = [...filteredRequests].sort((a, b) => {
      const priorityOrder = { CRITICAL: 3, URGENT: 2, NORMAL: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#F5F7FA" }}>
        <Header title="Requests" onBack={() => setPage("dashboard")} />
        <div style={{ padding: "16px" }}>
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          >
            {["Pending", "Approved", "Dispatched", "Rejected", "All"].map(
              (f) => (
                <button
                  key={f}
                  onClick={() => setRequestsFilter(f)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "20px",
                    border: "none",
                    backgroundColor:
                      requestsFilter === f ? "#1A4E9F" : "#e0e0e0",
                    color: requestsFilter === f ? "white" : "#333",
                    cursor: "pointer",
                  }}
                >
                  {f}
                </button>
              )
            )}
          </div>
          {sortedRequests.map((req) => (
            <div
              key={req.id}
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "16px",
                marginBottom: "12px",
                borderLeft: `4px solid ${
                  req.priority === "CRITICAL"
                    ? "#E24B4A"
                    : req.priority === "URGENT"
                    ? "#BA7517"
                    : "#27A76A"
                }`,
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    flexWrap: "wrap",
                    marginBottom: "8px",
                  }}
                >
                  <p style={{ fontWeight: "bold", margin: 0 }}>{req.center}</p>
                  <span
                    style={{
                      fontSize: "10px",
                      padding: "2px 8px",
                      borderRadius: "12px",
                      backgroundColor:
                        req.priority === "CRITICAL"
                          ? "#E24B4A"
                          : req.priority === "URGENT"
                          ? "#BA7517"
                          : "#27A76A",
                      color: "white",
                    }}
                  >
                    {req.priority}
                  </span>
                  <span style={{ fontSize: "10px", color: "#999" }}>
                    {req.time}
                  </span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  {req.medications
                    .map((m) => `${m.name} ${m.quantity}`)
                    .join(", ")}
                </p>
                <p style={{ fontSize: "12px", color: "#999" }}>
                  Requested by: {req.requester}
                </p>
                <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: "12px",
                      fontSize: "11px",
                      backgroundColor:
                        req.status === "Pending"
                          ? "#FFF8F0"
                          : req.status === "Approved"
                          ? "#F0FFF4"
                          : "#f0f0f0",
                      color:
                        req.status === "Pending"
                          ? "#BA7517"
                          : req.status === "Approved"
                          ? "#27A76A"
                          : "#666",
                    }}
                  >
                    {req.status}
                  </span>
                  {req.status === "Pending" && (
                    <>
                      <button
                        onClick={() => {
                          setShowRejectReason(req.id);
                        }}
                        style={{
                          padding: "6px 12px",
                          backgroundColor: "#E24B4A",
                          color: "white",
                          border: "none",
                          borderRadius: "8px",
                          cursor: "pointer",
                        }}
                      >
                        Reject
                      </button>
                      <button
                        onClick={() => handleApprove(req.id)}
                        style={{
                          padding: "6px 12px",
                          backgroundColor: "#27A76A",
                          color: "white",
                          border: "none",
                          borderRadius: "8px",
                          cursor: "pointer",
                        }}
                      >
                        Approve & Dispatch
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
          {showRejectReason && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                zIndex: 200,
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "24px",
                  padding: "24px",
                  width: "100%",
                  maxWidth: "350px",
                }}
              >
                <h3>Reason for rejection</h3>
                <textarea
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                  placeholder="Enter reason..."
                  style={{
                    width: "100%",
                    padding: "12px",
                    margin: "10px 0",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    minHeight: "80px",
                  }}
                />
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={() => handleReject(showRejectReason)}
                    style={{
                      flex: 1,
                      padding: "12px",
                      backgroundColor: "#E24B4A",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => {
                      setShowRejectReason(null);
                      setRejectReason("");
                    }}
                    style={{
                      flex: 1,
                      padding: "12px",
                      backgroundColor: "#999",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // INVENTORY PAGE (identique)
  if (page === "inventory") {
    const categories = [
      "All",
      "Antibiotics",
      "Painkillers",
      "Chronic",
      "Emergency",
      "Supplements",
    ];
    const filtered = inventory.filter(
      (i) =>
        (categoryInventory === "All" || i.category === categoryInventory) &&
        i.name.toLowerCase().includes(searchInventory.toLowerCase())
    );
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#F5F7FA" }}>
        <Header title="Inventory" onBack={() => setPage("dashboard")} />
        <div style={{ padding: "16px" }}>
          <input
            type="text"
            placeholder="Search medications..."
            value={searchInventory}
            onChange={(e) => setSearchInventory(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "12px",
              marginBottom: "12px",
              fontSize: "14px",
            }}
          />
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          >
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategoryInventory(c)}
                style={{
                  padding: "6px 12px",
                  borderRadius: "20px",
                  border: "none",
                  backgroundColor:
                    categoryInventory === c ? "#1A4E9F" : "#e0e0e0",
                  color: categoryInventory === c ? "white" : "#333",
                  cursor: "pointer",
                  fontSize: "12px",
                }}
              >
                {c}
              </button>
            ))}
          </div>
          {filtered.map((item) => {
            const stockPercent = Math.min(100, (item.stock / 100) * 100);
            const stockColor =
              item.stock < 50
                ? "#E24B4A"
                : item.stock < 200
                ? "#BA7517"
                : "#27A76A";
            return (
              <div
                key={item.id}
                style={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  padding: "16px",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                      {item.name}
                    </p>
                    <p style={{ fontSize: "12px", color: "#666" }}>
                      {item.category} • {item.storage}
                    </p>
                    {item.critical && (
                      <span
                        style={{
                          fontSize: "10px",
                          backgroundColor: "#E24B4A",
                          color: "white",
                          padding: "2px 8px",
                          borderRadius: "10px",
                          marginTop: "4px",
                          display: "inline-block",
                        }}
                      >
                        ⚠️ CRITICAL STOCK
                      </span>
                    )}
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p
                      style={{
                        fontSize: "22px",
                        fontWeight: "bold",
                        color: stockColor,
                      }}
                    >
                      {item.stock} {item.unit}
                    </p>
                    <div
                      style={{
                        width: "100px",
                        height: "6px",
                        backgroundColor: "#e0e0e0",
                        borderRadius: "3px",
                      }}
                    >
                      <div
                        style={{
                          width: `${stockPercent}%`,
                          height: "6px",
                          backgroundColor: stockColor,
                          borderRadius: "3px",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {filtered.length === 0 && (
            <div
              style={{ textAlign: "center", padding: "40px", color: "#999" }}
            >
              No medications found
            </div>
          )}
        </div>
      </div>
    );
  }

  // DRONE FLEET PAGE
  if (page === "droneFleet") {
    const filteredDrones =
      droneFilter === "All"
        ? drones
        : drones.filter((d) => d.status === droneFilter);
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#F5F7FA" }}>
        <Header title="Drone Fleet" onBack={() => setPage("dashboard")} />
        <div style={{ padding: "16px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                backgroundColor: "#27A76A",
                color: "white",
                padding: "12px",
                borderRadius: "12px",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                {drones.filter((d) => d.status === "Active").length}
              </p>
              <p style={{ fontSize: "12px" }}>Active</p>
            </div>
            <div
              style={{
                backgroundColor: "#666",
                color: "white",
                padding: "12px",
                borderRadius: "12px",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                {drones.filter((d) => d.status === "Idle").length}
              </p>
              <p style={{ fontSize: "12px" }}>Idle</p>
            </div>
            <div
              style={{
                backgroundColor: "#BA7517",
                color: "white",
                padding: "12px",
                borderRadius: "12px",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                {drones.filter((d) => d.status === "Charging").length}
              </p>
              <p style={{ fontSize: "12px" }}>Charging</p>
            </div>
            <div
              style={{
                backgroundColor: "#E24B4A",
                color: "white",
                padding: "12px",
                borderRadius: "12px",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>0</p>
              <p style={{ fontSize: "12px" }}>Issue</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          >
            {["All", "Active", "Idle", "Charging"].map((f) => (
              <button
                key={f}
                onClick={() => setDroneFilter(f)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "20px",
                  border: "none",
                  backgroundColor: droneFilter === f ? "#1A4E9F" : "#e0e0e0",
                  color: droneFilter === f ? "white" : "#333",
                  cursor: "pointer",
                }}
              >
                {f}
              </button>
            ))}
          </div>
          {filteredDrones.map((drone) => (
            <div
              key={drone.id}
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "16px",
                marginBottom: "12px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                    {drone.name}
                  </p>
                  <p>🚁 {drone.status}</p>
                  {drone.mission && (
                    <p style={{ fontSize: "12px", color: "#666" }}>
                      🎯 {drone.mission}
                    </p>
                  )}
                </div>
                <div style={{ textAlign: "right" }}>
                  <p>🔋 {drone.battery}%</p>
                  <p>⚡ {drone.speed} km/h</p>
                  <p>📈 {drone.altitude} m</p>
                  {drone.eta && (
                    <p style={{ color: "#1A4E9F", fontWeight: "bold" }}>
                      ETA: {drone.eta}
                    </p>
                  )}
                </div>
              </div>
              <div style={{ marginTop: "12px" }}>
                <div
                  style={{
                    width: "100%",
                    height: "6px",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "3px",
                  }}
                >
                  <div
                    style={{
                      width: `${drone.battery}%`,
                      height: "6px",
                      backgroundColor:
                        drone.battery > 50 ? "#27A76A" : "#BA7517",
                      borderRadius: "3px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "16px",
              marginTop: "16px",
            }}
          >
            <h3 style={{ marginBottom: "12px" }}>📊 Fleet History</h3>
            <p>
              Total missions:{" "}
              {drones.reduce((sum, d) => sum + d.totalMissions, 0)}
            </p>
            <p>
              Total km flown: {drones.reduce((sum, d) => sum + d.totalKm, 0)} km
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ANALYTICS PAGE (identique)
  if (page === "analytics") {
    const completed = requests.filter(
      (r) => r.status === "Approved" || r.status === "Dispatched"
    ).length;
    const inTransit = requests.filter((r) => r.status === "Dispatched").length;
    const pending = requests.filter((r) => r.status === "Pending").length;
    const medCount = {};
    requests.forEach((r) =>
      r.medications.forEach(
        (m) => (medCount[m.name] = (medCount[m.name] || 0) + m.quantity)
      )
    );
    const topMeds = Object.entries(medCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);
    const totalRequests = requests.length;
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#F5F7FA" }}>
        <Header title="Analytics" onBack={() => setPage("dashboard")} />
        <div style={{ padding: "16px" }}>
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          >
            {["Week", "Month", "Quarter", "Year"].map((p) => (
              <button
                key={p}
                onClick={() => setAnalyticsPeriod(p)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "20px",
                  border: "none",
                  backgroundColor:
                    analyticsPeriod === p ? "#1A4E9F" : "#e0e0e0",
                  color: analyticsPeriod === p ? "white" : "#333",
                  cursor: "pointer",
                }}
              >
                {p}
              </button>
            ))}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "16px",
                borderRadius: "16px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#1A4E9F",
                }}
              >
                {totalRequests}
              </p>
              <p>Deliveries</p>
              <span style={{ color: "#27A76A" }}>↑ +12%</span>
            </div>
            <div
              style={{
                backgroundColor: "white",
                padding: "16px",
                borderRadius: "16px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#1A4E9F",
                }}
              >
                24 min
              </p>
              <p>Avg. time</p>
              <span style={{ color: "#27A76A" }}>↓ -3%</span>
            </div>
            <div
              style={{
                backgroundColor: "white",
                padding: "16px",
                borderRadius: "16px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#27A76A",
                }}
              >
                98.5%
              </p>
              <p>Success rate</p>
              <span style={{ color: "#27A76A" }}>↑ +1.2%</span>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "16px",
              marginBottom: "16px",
            }}
          >
            <h3>📊 Status Distribution</h3>
            <div style={{ marginTop: "12px" }}>
              <div style={{ marginBottom: "8px" }}>
                <span>✅ Delivered: {completed}</span>
                <div
                  style={{
                    width: "100%",
                    height: "8px",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "4px",
                    marginTop: "4px",
                  }}
                >
                  <div
                    style={{
                      width: `${(completed / totalRequests) * 100}%`,
                      height: "8px",
                      backgroundColor: "#27A76A",
                      borderRadius: "4px",
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <span>🚁 In transit: {inTransit}</span>
                <div
                  style={{
                    width: "100%",
                    height: "8px",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "4px",
                    marginTop: "4px",
                  }}
                >
                  <div
                    style={{
                      width: `${(inTransit / totalRequests) * 100}%`,
                      height: "8px",
                      backgroundColor: "#1A4E9F",
                      borderRadius: "4px",
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <span>⏳ Pending: {pending}</span>
                <div
                  style={{
                    width: "100%",
                    height: "8px",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "4px",
                    marginTop: "4px",
                  }}
                >
                  <div
                    style={{
                      width: `${(pending / totalRequests) * 100}%`,
                      height: "8px",
                      backgroundColor: "#BA7517",
                      borderRadius: "4px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "16px",
            }}
          >
            <h3>🏆 Most Requested</h3>
            {topMeds.map(([name, qty]) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                <span>{name}</span>
                <span style={{ fontWeight: "bold" }}>{qty} units</span>
              </div>
            ))}
            <button
              onClick={() => alert("PDF Export - Feature coming soon")}
              style={{
                width: "100%",
                marginTop: "16px",
                padding: "12px",
                backgroundColor: "#1A4E9F",
                color: "white",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              📄 Export PDF
            </button>
          </div>
        </div>
      </div>
    );
  }

  // MANAGE CENTERS PAGE (identique)
  if (page === "manageCenters") {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#F5F7FA" }}>
        <Header title="Manage Centers" onBack={() => setPage("dashboard")} />
        <div style={{ padding: "16px" }}>
          <button
            onClick={() => setShowAddCenter(true)}
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#1A4E9F",
              color: "white",
              border: "none",
              borderRadius: "12px",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          >
            + Add New Center
          </button>
          {centers.map((center) => (
            <div
              key={center.id}
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "16px",
                marginBottom: "12px",
              }}
            >
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p style={{ fontWeight: "bold" }}>{center.name}</p>
                  <span
                    style={{
                      color: center.active ? "#27A76A" : "#E24B4A",
                      fontSize: "12px",
                    }}
                  >
                    {center.active ? "Active" : "Inactive"}
                  </span>
                </div>
                <p style={{ fontSize: "12px", color: "#666" }}>
                  📍 {center.zone} • 📍 {center.distance} • 📦{" "}
                  {center.deliveries} deliveries
                </p>
                <p style={{ fontSize: "12px", color: "#666" }}>
                  👤 {center.agent} • {center.email}
                </p>
                <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
                  <button
                    onClick={() => setShowCredentials(center)}
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#1A4E9F",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Credentials
                  </button>
                  <button
                    style={{
                      padding: "6px 12px",
                      backgroundColor: center.active ? "#E24B4A" : "#27A76A",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    {center.active ? "Disable" : "Enable"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {showAddCenter && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              zIndex: 200,
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "24px",
                padding: "24px",
                width: "100%",
                maxWidth: "400px",
              }}
            >
              <h3>Add Distribution Center</h3>
              <input
                type="text"
                placeholder="Center name"
                value={newCenter.name}
                onChange={(e) =>
                  setNewCenter({ ...newCenter, name: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "12px",
                  margin: "10px 0",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                }}
              />
              <input
                type="text"
                placeholder="Zone"
                value={newCenter.zone}
                onChange={(e) =>
                  setNewCenter({ ...newCenter, zone: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "12px",
                  margin: "10px 0",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                }}
              />
              <input
                type="text"
                placeholder="Agent name"
                value={newCenter.agent}
                onChange={(e) =>
                  setNewCenter({ ...newCenter, agent: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "12px",
                  margin: "10px 0",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                }}
              />
              <input
                type="email"
                placeholder="Agent email"
                value={newCenter.email}
                onChange={(e) =>
                  setNewCenter({ ...newCenter, email: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "12px",
                  margin: "10px 0",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                }}
              />
              <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
                <button
                  onClick={handleAddCenter}
                  style={{
                    flex: 1,
                    padding: "12px",
                    backgroundColor: "#27A76A",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Create
                </button>
                <button
                  onClick={() => setShowAddCenter(false)}
                  style={{
                    flex: 1,
                    padding: "12px",
                    backgroundColor: "#E24B4A",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        {showCredentials && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              zIndex: 200,
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "24px",
                padding: "24px",
                width: "100%",
                maxWidth: "400px",
              }}
            >
              <h3>Center Credentials</h3>
              <p>
                <strong>Center:</strong> {showCredentials.name}
              </p>
              <p>
                <strong>Email:</strong> {showCredentials.email}
              </p>
              <p>
                <strong>Access Code:</strong>{" "}
                <code
                  style={{
                    backgroundColor: "#f0f0f0",
                    padding: "8px",
                    borderRadius: "8px",
                    display: "block",
                    textAlign: "center",
                    fontSize: "18px",
                    letterSpacing: "2px",
                  }}
                >
                  {showCredentials.code}
                </code>
              </p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(showCredentials.code);
                  alert("Code copied!");
                }}
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#1A4E9F",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginBottom: "10px",
                }}
              >
                📋 Copy Code
              </button>
              <button
                onClick={() => setShowCredentials(null)}
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#E24B4A",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // NEW REQUEST PAGE (identique)
  if (page === "newRequest") {
    const categories = [
      "Antibiotics",
      "Painkillers",
      "Chronic",
      "Emergency",
      "Supplements",
    ];
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#F5F7FA" }}>
        <Header title="New Request" onBack={() => setPage("dashboard")} />
        <div style={{ padding: "16px" }}>
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          >
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCat(c)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "20px",
                  border: "none",
                  backgroundColor: selectedCat === c ? "#1A4E9F" : "#e0e0e0",
                  color: selectedCat === c ? "white" : "#333",
                  cursor: "pointer",
                }}
              >
                {c}
              </button>
            ))}
          </div>
          {medications
            .filter((m) => m.category === selectedCat)
            .map((med) => (
              <div
                key={med.id}
                style={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  padding: "16px",
                  marginBottom: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <p style={{ fontWeight: "bold" }}>{med.name}</p>
                  <p style={{ fontSize: "12px", color: "#666" }}>
                    Stock: {med.stock} {med.unit} • {med.price} MAD
                  </p>
                </div>
                <button
                  onClick={() => addToCart(med)}
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "#27A76A",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  + Add
                </button>
              </div>
            ))}
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <p style={{ fontWeight: "bold", marginBottom: "8px" }}>Priority:</p>
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                onClick={() => setRequestPriority("NORMAL")}
                style={{
                  flex: 1,
                  padding: "12px",
                  backgroundColor:
                    requestPriority === "NORMAL" ? "#27A76A" : "#f0f0f0",
                  color: requestPriority === "NORMAL" ? "white" : "#333",
                  border: "none",
                  borderRadius: "12px",
                  cursor: "pointer",
                }}
              >
                🟢 Normal
              </button>
              <button
                onClick={() => setRequestPriority("URGENT")}
                style={{
                  flex: 1,
                  padding: "12px",
                  backgroundColor:
                    requestPriority === "URGENT" ? "#BA7517" : "#f0f0f0",
                  color: requestPriority === "URGENT" ? "white" : "#333",
                  border: "none",
                  borderRadius: "12px",
                  cursor: "pointer",
                }}
              >
                🟡 Urgent
              </button>
              <button
                onClick={() => setRequestPriority("CRITICAL")}
                style={{
                  flex: 1,
                  padding: "12px",
                  backgroundColor:
                    requestPriority === "CRITICAL" ? "#E24B4A" : "#f0f0f0",
                  color: requestPriority === "CRITICAL" ? "white" : "#333",
                  border: "none",
                  borderRadius: "12px",
                  cursor: "pointer",
                }}
              >
                🔴 Critical
              </button>
            </div>
          </div>
          {cartItems.length > 0 && (
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "16px",
                marginBottom: "20px",
              }}
            >
              <h3>🛒 Cart ({cartItems.length} items)</h3>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 0",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <span>{item.name}</span>
                  <div>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      style={{
                        width: "60px",
                        padding: "4px",
                        borderRadius: "4px",
                        border: "1px solid #ddd",
                        textAlign: "center",
                      }}
                    />
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        marginLeft: "8px",
                        backgroundColor: "#E24B4A",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        padding: "4px 8px",
                        cursor: "pointer",
                      }}
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={submitRequest}
                style={{
                  width: "100%",
                  marginTop: "16px",
                  padding: "14px",
                  backgroundColor: "#27A76A",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  cursor: "pointer",
                }}
              >
                📤 Submit Request
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // LIVE TRACKING MAP (identique)
  if (page === "tracking") {
    const selectedDroneData =
      trackingDrone === "all"
        ? drones[0]
        : drones.find((d) => d.name === trackingDrone);
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#0D2E6B" }}>
        <Header title="Live Tracking" onBack={() => setPage("dashboard")} />
        <div style={{ padding: "16px" }}>
          <div
            style={{
              height: "300px",
              backgroundColor: "#1a1a2e",
              borderRadius: "16px",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(91,164,212,0.2) 0%, transparent 50%)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "48px", animation: "pulse 2s infinite" }}>
                🚁
              </div>
              <p>Drone en route • GPS: 33.5731°N, 7.5898°W</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "2px",
                    backgroundColor: "#27A76A",
                  }}
                ></div>
                <div
                  style={{
                    width: "150px",
                    height: "2px",
                    border: "1px dashed #5BA4D4",
                  }}
                ></div>
                <div
                  style={{
                    width: "2px",
                    height: "10px",
                    backgroundColor: "#E24B4A",
                  }}
                ></div>
                <span>Destination</span>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginBottom: "16px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => setTrackingDrone("all")}
              style={{
                padding: "8px 16px",
                borderRadius: "20px",
                border: "none",
                backgroundColor: trackingDrone === "all" ? "#1A4E9F" : "#333",
                color: "white",
                cursor: "pointer",
              }}
            >
              All drones
            </button>
            {drones.map((d) => (
              <button
                key={d.name}
                onClick={() => setTrackingDrone(d.name)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "20px",
                  border: "none",
                  backgroundColor:
                    trackingDrone === d.name ? "#5BA4D4" : "#333",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                {d.name}
              </button>
            ))}
          </div>
          {selectedDroneData && (
            <div
              style={{
                backgroundColor: "#1a1a2e",
                borderRadius: "16px",
                padding: "16px",
                color: "white",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                }}
              >
                <div>
                  <p style={{ color: "#999" }}>Speed</p>
                  <p style={{ fontSize: "24px", fontWeight: "bold" }}>
                    {selectedDroneData.speed} km/h
                  </p>
                </div>
                <div>
                  <p style={{ color: "#999" }}>Battery</p>
                  <p style={{ fontSize: "24px", fontWeight: "bold" }}>
                    {selectedDroneData.battery}%
                  </p>
                </div>
                <div>
                  <p style={{ color: "#999" }}>Distance remaining</p>
                  <p style={{ fontSize: "24px", fontWeight: "bold" }}>23 km</p>
                </div>
                <div>
                  <p style={{ color: "#999" }}>Altitude</p>
                  <p style={{ fontSize: "24px", fontWeight: "bold" }}>
                    {selectedDroneData.altitude} m
                  </p>
                </div>
              </div>
              <div style={{ marginTop: "12px" }}>
                <p style={{ color: "#999" }}>Route progress</p>
                <div
                  style={{
                    width: "100%",
                    height: "8px",
                    backgroundColor: "#333",
                    borderRadius: "4px",
                  }}
                >
                  <div
                    style={{
                      width: "65%",
                      height: "8px",
                      backgroundColor: "#27A76A",
                      borderRadius: "4px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // RECEPTION QR CODE (identique)
  if (page === "reception") {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#F5F7FA",
          padding: "16px",
        }}
      >
        <Header title="Reception" onBack={() => setPage("dashboard")} />
        {!confirmedReception ? (
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            <div
              style={{
                backgroundColor: "white",
                padding: "30px",
                borderRadius: "24px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "black",
                  margin: "0 auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "16px",
                }}
              >
                <div
                  style={{
                    width: "160px",
                    height: "160px",
                    display: "grid",
                    gridTemplateColumns: "repeat(21, 1fr)",
                    gridTemplateRows: "repeat(21, 1fr)",
                  }}
                >
                  {Array(441)
                    .fill()
                    .map((_, i) => (
                      <div
                        key={i}
                        style={{
                          backgroundColor:
                            (Math.floor(i / 21) + (i % 21)) % 2 === 0
                              ? "white"
                              : "black",
                        }}
                      ></div>
                    ))}
                </div>
              </div>
              <p style={{ fontSize: "12px", color: "#666", marginTop: "12px" }}>
                DEL-2024-00123
              </p>
            </div>
            <p style={{ textAlign: "center", marginBottom: "20px" }}>
              <strong>Delivery Details:</strong>
              <br />
              Amoxicillin 200 tablets • Insulin 10 vials
              <br />
              Drone: MDF-07
            </p>
            <button
              onClick={handleConfirmReception}
              style={{
                width: "100%",
                padding: "16px",
                backgroundColor: "#27A76A",
                color: "white",
                border: "none",
                borderRadius: "16px",
                cursor: "pointer",
              }}
            >
              ✓ Scan & Confirm Reception
            </button>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "#27A76A",
              color: "white",
              padding: "40px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "48px" }}>✅</p>
            <h2>Delivery Confirmed!</h2>
            <p>Stock updated at {new Date().toLocaleTimeString()}</p>
            <button
              onClick={() => setPage("dashboard")}
              style={{
                marginTop: "20px",
                padding: "12px 24px",
                backgroundColor: "white",
                color: "#27A76A",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              Back to Dashboard
            </button>
          </div>
        )}
      </div>
    );
  }

  return null;
}

export default App;
