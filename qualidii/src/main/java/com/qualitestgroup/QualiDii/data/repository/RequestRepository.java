package com.qualitestgroup.QualiDii.data.repository;

import com.qualitestgroup.QualiDii.data.beans.Request;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RequestRepository extends JpaRepository<Request,Long> {
}
