package com.mycompany.moduleone.repository;

import com.mycompany.moduleone.entity.StudentEntity;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends PagingAndSortingRepository<StudentEntity, Long> {

}