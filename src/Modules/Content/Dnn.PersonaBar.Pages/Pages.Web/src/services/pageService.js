import Api from "./api";

const PageService = function () {

    let api = null;
    function getApi() {
        if (api === null) {
            api = new Api(window.dnn.pages.apiController);
        }        
        return api;
    }

    const getPage = function (pageId) {
        const api = getApi();
        return api.get("GetPageDetails", { pageId })
            .then(response => toFrontEndPage(response));
    };

    const savePage = function (page) {
        const api = getApi();
        return api.post("SavePageDetails", toBackEndPage(page));
    };

    const deletePageModule = function (module) {
        const api = getApi();
        return api.post("DeletePageModule", module);
    };

    const getPageUrlPreview = function (value) {
        const api = getApi();
        return api.get("GetPageUrlPreview", { url: value });
    };

    const getNewPage = function () {
        const api = getApi();
        return api.get("GetDefaultPermissions")
            .then(permissions => {
                return {
                    tabId: 0,
                    name: "",
                    status: "Visible",
                    localizedName: "",
                    alias: "",
                    title: "",
                    description: "",
                    keywords: "",
                    tags: "",
                    url: "",
                    includeInMenu: true,
                    thumbnail: "",
                    created: "",
                    hierarchy: "",
                    hasChild: false,
                    type: 0,
                    customUrlEnabled: true,
                    pageType: "normal",
                    isCopy: false,
                    trackLinks: false,
                    startDate: null,
                    endDate: null,
                    createdOnDate: new Date(),
                    placeholderURL: "/",
                    modules: [],
                    permissions: permissions,
                    schedulingEnabled: false,
                    permanentRedirect: false,
                    linkNewWindow: false
                };
            });
    };

    const getCacheProviderList = function () {
        const api = getApi();
        return api.get("GetCacheProviderList");
    };
    
    const toFrontEndPage = function (page) {
        return {
            ...page,
            schedulingEnabled: page.startDate || page.endDate 
        };
    }; 

    const toBackEndPage = function (page) {
        return {
            ...page,
            startDate: page.schedulingEnabled ? page.startDate : null,
            endDate: page.schedulingEnabled ? page.endDate : null,
            schedulingEnabled: undefined
        };
    };

    return {
        getPage,
        savePage,
        getNewPage,
        getCacheProviderList,
        deletePageModule,
        getPageUrlPreview
    };
};

const pageService = PageService();
export default pageService;
