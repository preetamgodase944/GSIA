export const downloadBrochure = () => {
    const brochureUrl = '/brochure.pdf'; // TODO: replace with real path

    const link = document.createElement('a');
    link.href = brochureUrl;
    link.setAttribute('download', 'Company_Brochure.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};