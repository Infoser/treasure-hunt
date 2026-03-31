const appLogic = {
    redirect: (url) => {
        window.location.href = url;
    },

    checkAuth: () => {
        const teamId = localStorage.getItem("huntTeamId");
    
        const currentPage = window.location.pathname;

        if (!teamId && !currentPage.endsWith("index.html") && currentPage !== "/") {
            console.warn("🚨 Unauthorized access detected. Redirecting to secure login.");
            window.location.href = "index.html";
        }
    },

    logout: () => {
        localStorage.removeItem("huntTeamId");
        window.location.href = "index.html";
    }
};

window.appLogic = appLogic;

appLogic.checkAuth();