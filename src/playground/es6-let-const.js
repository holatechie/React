//dont use var
var nameVar = "Yesha";
var nameVar = "Isha";
console.log(`nameVar: ${nameVar}`);

let nameLet = "Mina";
/* 
if declared same variable name compiler throws error of TypeError:  Duplicate declaration "nameLet" 
# let nameLet = "Hina";

 */
nameLet = "Hina";
console.log(`nameLet ${nameLet}`);

const user = (
  <div>
    <p>This is para</p>
  </div>
);
/* 
if used user like this compiler throws error of  SyntaxError: "user" is read-only
# user = "girls";
*/
console.log(user);

const getPet = () => {
  const petname = "hola";
  return petname;
};
const petname = getPet();
console.log(`petname: ${petname}`);

const fullName = "Yesha Patel";
console.log("first declaration:", fullName);
let firstName;

if (fullName) {
  firstName = fullName.split(" ");
  console.log("in if:", fullName);
}
console.log("after if", firstName);

ReactDOM.render(user, document.getElementById("root"));
