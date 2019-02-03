package com.mycompany.moduleone.service;

import com.mycompany.moduleone.entity.StudentEntity;
import com.mycompany.moduleone.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public List<StudentEntity> listStudents(){

        List<StudentEntity> students = new ArrayList<>();
        studentRepository.findAll().forEach(students::add);
        return students;
    }
}
