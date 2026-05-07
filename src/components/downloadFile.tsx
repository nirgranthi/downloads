export function downloadFile(link: string, name: string) {
    if (!link) return
    const a = document.createElement("a");
    a.href = link;
    a.download = name;
    a.click();
}