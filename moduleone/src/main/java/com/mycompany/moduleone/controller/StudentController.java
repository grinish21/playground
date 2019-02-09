package com.mycompany.moduleone.controller;

import com.mycompany.moduleone.entity.StudentEntity;
import com.mycompany.moduleone.repository.StudentRepository;
import com.mycompany.moduleone.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
public class StudentController {

    @Autowired
    StudentRepository studentRepository;

    @Autowired
    StudentService studentService;

    @PostMapping("/students")
    public StudentEntity createStudent(@Valid @RequestBody StudentEntity student) {

        return studentRepository.save(student);
    }

    @GetMapping("/students/{id}")
    public StudentEntity getStudentById(@PathVariable(value = "id") Long studentId) {
        return studentRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Cannot find student"));
    }

    @GetMapping("/students")
    public List<StudentEntity> getStudents() {
        return studentService.listStudents();
    }

    @DeleteMapping("/students/{id}")
    public void deleteStudent(@PathVariable long id) {
        studentRepository.deleteById(id);
    }

    @PutMapping("/students/{id}")
    public StudentEntity updateStudent(@RequestBody StudentEntity student, @PathVariable long id) {

        Optional<StudentEntity> studentOptional = studentRepository.findById(id);

        if (!studentOptional.isPresent())
            throw new RuntimeException("Student doenot exist !!!");

        student.setId(id);
        studentRepository.save(student);

        return studentRepository.save(student);
    }
}
