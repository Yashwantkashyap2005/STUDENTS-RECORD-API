const apiUrl = "http://localhost:5000/students";

// Fetch and display all students
async function fetchStudents() {
  const res = await fetch(apiUrl);
  const data = await res.json();

  const table = document.getElementById("studentTable");
  table.innerHTML = "";

  data.data.forEach(student => {
    const row = `
      <tr>
        <td>${student.name}</td>
        <td>${student.course}</td>
        <td>${student.age || '-'}</td>
        <td>${student.city || '-'}</td>
        <td>
          <button class="edit-btn" onclick="editStudent('${student._id}', '${student.name}', '${student.course}', '${student.age}', '${student.city}')">Edit</button>
          <button class="delete-btn" onclick="deleteStudent('${student._id}')">Delete</button>
        </td>
      </tr>`;
    table.innerHTML += row;
  });
}

// Add or update student
async function saveStudent() {
  const id = document.getElementById("studentId").value;
  const name = document.getElementById("name").value;
  const course = document.getElementById("course").value;
  const age = document.getElementById("age").value;
  const city = document.getElementById("city").value;

  if (!name || !course) {
    alert("Name and Course are required!");
    return;
  }

  const studentData = { name, course, age, city };

  let res;
  if (id) {
    // Update
    res = await fetch(`${apiUrl}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData),
    });
    alert("✅ Student updated successfully!");
  } else {
    // Add
    res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData),
    });
    alert("✅ Student added successfully!");
  }

  document.getElementById("studentId").value = "";
  document.getElementById("name").value = "";
  document.getElementById("course").value = "";
  document.getElementById("age").value = "";
  document.getElementById("city").value = "";
  document.getElementById("cancelEdit").style.display = "none";

  fetchStudents();
}

// Delete student
async function deleteStudent(id) {
  if (confirm("Are you sure you want to delete this student?")) {
    await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
    alert("🗑️ Student deleted!");
    fetchStudents();
  }
}

// Edit student
function editStudent(id, name, course, age, city) {
  document.getElementById("studentId").value = id;
  document.getElementById("name").value = name;
  document.getElementById("course").value = course;
  document.getElementById("age").value = age;
  document.getElementById("city").value = city;
  document.getElementById("cancelEdit").style.display = "inline-block";
}

// Cancel editing
function cancelEdit() {
  document.getElementById("studentId").value = "";
  document.getElementById("name").value = "";
  document.getElementById("course").value = "";
  document.getElementById("age").value = "";
  document.getElementById("city").value = "";
  document.getElementById("cancelEdit").style.display = "none";
}

// Load students on page load
fetchStudents();
