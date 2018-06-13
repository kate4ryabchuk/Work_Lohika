//Сервер
const express = require('express');
const app = express();
const year = 2018;

app.listen(year, () => {
    console.log('HELLOOOOOOOOO, WOOOOORLD!!!!' + year);
});
