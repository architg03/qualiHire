package com.qualitestgroup.QualiDii.data.repository;

import com.qualitestgroup.QualiDii.data.beans.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
}
