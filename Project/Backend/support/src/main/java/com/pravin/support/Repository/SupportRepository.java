package com.pravin.support.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.pravin.support.Entity.Support;
public interface SupportRepository extends JpaRepository <Support,Integer> {

}
