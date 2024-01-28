let pageTitle, pageDescription, pageDate;
pageTitle = "Elzero";
pageDescription = "Elzero Web School";
pageDate = "25/10";

// first way using your hand
// let divVar = `
//     <div>
//         <h3>Hello ${pageTitle}</h3>
//         <p>${pageDescription}</p>
//         <span>${pageDate}</span>
//     </div>
//     <div>
//         <h3>Hello ${pageTitle}</h3>
//         <p>${pageDescription}</p>
//         <span>${pageDate}</span>
//     </div>
//     <div>
//         <h3>Hello ${pageTitle}</h3>
//         <p>${pageDescription}</p>
//         <span>${pageDate}</span>
//     </div>
//     <div>
//         <h3>Hello ${pageTitle}</h3>
//         <p>${pageDescription}</p>
//         <span>${pageDate}</span>
//     </div>
// `;

// document.write(divVar);

// second way using repeat function
let divVar2 = `
    <div>
        <h3>Hello ${pageTitle}</h3>
        <p>${pageDescription}</p>
        <span>${pageDate}</span>
    </div>
`;

document.write(divVar2.repeat(4));
