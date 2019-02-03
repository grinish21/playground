package com.mycompany.moduleone.service;

import com.mycompany.moduleone.entity.StudentEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface StudentService {
    public List<StudentEntity> listStudents();
}
