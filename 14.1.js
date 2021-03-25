const parser = new DOMParser();
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector("list")
const studentNode = listNode.querySelectorAll("student");
const result = new Object();
result.list = [];

studentNode.forEach(function(student){
    const nameNode = student.querySelector("name");
    const firstNode = nameNode.querySelector("first");
    const secondNode = nameNode.querySelector("second");

    const ageNode = student.querySelector("age");
    const profNode = student.querySelector("prof");

    const nameAttr = nameNode.getAttribute('lang');
    const stud = {
        name: `${firstNode.textContent} ${secondNode.textContent}`,
        age: ageNode.textContent,
        prof: profNode.textContent,
        lang: nameAttr
    }
    result["list"].push(stud)
})
console.log(result);