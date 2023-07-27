package com.pravin.support.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pravin.support.Entity.Support;
import com.pravin.support.Repository.SupportRepository;

@Service
public class SupportService {
	
	@Autowired
	  private SupportRepository repo;
	  
	  public Support addSupport(Support feed) {
			return repo.save(feed);
		}

}
