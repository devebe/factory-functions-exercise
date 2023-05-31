const userFactory = (name, age, address) => {
    const printAge = () => console.log(`${name} is ${age} years old.`);
    const printAddress = () => console.log(`${name} lives on ${address}.`);
    return {name, age, address, printAge, printAddress};
};

const counterCreator = () => {
    let count = 0;
    return () => {
        console.log(count);
        count++;
    };
};

// Can I use this elsewhere?
const htmlCreator = (location, childId, tag, text) => {
    const renderInDOM = () => {
        const element = document.querySelector(location);
        const child = document.createElement(tag);
        child.setAttribute('id', childId);
        child.textContent = text;
        element.appendChild(child);
    };
    const removeFromDOM = () => {
        const element = document.getElementById(childId);
        element.remove();
    }
    return {
        tag: tag, 
        targetHTML: location, 
        newElementId: childId, 
        renderInDOM, 
        removeFromDOM
    };
};