package com.qualitestgroup.QualiDii.data.repository;

import com.qualitestgroup.QualiDii.data.beans.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepository extends JpaRepository<Profile,Long> {
}
