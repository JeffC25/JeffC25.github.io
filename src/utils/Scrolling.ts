const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element !&& element.scrollIntoView({ behavior: 'smooth' });
};

export default scrollTo;
