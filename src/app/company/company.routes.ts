import { CompanyForm } from "./components/company-form/company-form";
import { CompanyList } from "./components/company-list/company-list";

export const COMPANY_ROUTES = [

    {
        path: '',
        component: CompanyList
    },
    {
        path:'add',
        component: CompanyForm
    },
    {
        path:'edit/:id',
        component: CompanyForm
    }
]