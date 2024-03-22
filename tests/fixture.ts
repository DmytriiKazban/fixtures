import {test as baseTest, chromium as baseChromium} from '@playwright/test';
import {mainPage} from "../pages/page1";
import {cookiesModal} from "../pages/page2";
import { whyDeepl } from '../pages/page3';
import { proPlan } from '../pages/page4';


type basePage = {
    homePage: mainPage;
    modalWindow: cookiesModal; 
    deeplePlan : whyDeepl;
    professionalPlan : proPlan;
}

export const test = baseTest.extend<basePage>({
    homePage: async({page}, use) =>{
        let homePage = new mainPage(page);
        await use(homePage);
    },
    modalWindow: async({page}, use) => {
        let modalWindow = new cookiesModal(page);
        await use(modalWindow);
    },
    deeplePlan: async({page}, use) => {
        let deeplePlan = new whyDeepl(page);
        await use(deeplePlan);
    },
    professionalPlan: async({page}, use) => {
        let professionalPlan = new proPlan(page);
        await use(professionalPlan);
    }
})

export const chromium = baseChromium