  
const path = "/users/download/index.html"

const isHtml = path => {
  const requiredExt = ".html";
  const pathExt = path.slice(-5);
  // (-5) начинаем с последних символов
  // операторы сравнения всегда возвращают булевый тип

  return pathExt === requiredExt
}

console.log(isHtml(path));

//if (pathExt === requiredExt) {
 //   return true
//} else {
//    return false
//}