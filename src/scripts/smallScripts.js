export const checkboxGenerator = (products) => {
    let categoriesArray = products.map(product => product.category);
    let setproduct = new Set(categoriesArray);
    let filteredCategoriesArray = Array.from(setproduct).sort();
    return filteredCategoriesArray;
}