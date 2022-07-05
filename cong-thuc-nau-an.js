let recipe = {
    'title' : 'Sườn xào chua ngọt',
    'sevings' : 2,
    'ingredients' : ['400 g sườn thăn', '4 thìa nước mắm',
        '5 thìa đường', '5 thìa nước cốt chanh', '1/3 bát nước sôi',
        'Hành khô, tỏi, ớt, hành lá', '2 quả cà chua', 'Hành tây (ớt chuông)']
};

console.log('Tên món ăn : ' + recipe.title);
console.log('Khẩu phần ăn : ' + recipe.sevings);
console.log('Công thức : ' );
for(let i = 0; i< recipe.ingredients.length; i++) {
    console.log('- ' + recipe.ingredients[i]);
}