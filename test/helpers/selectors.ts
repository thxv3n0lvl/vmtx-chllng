    export const findByVisibleText = (visibleText: string): string => `android=new UiSelector().text("${visibleText}")`;
    export const findByRecyclerIndex = (index: number): string => `android=new UiSelector().className("android.view.ViewGroup").index(${index})`;

