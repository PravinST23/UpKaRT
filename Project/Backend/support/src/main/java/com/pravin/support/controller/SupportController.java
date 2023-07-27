package com.pravin.support.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.pravin.support.Entity.Support;
import com.pravin.support.Service.SupportService;

@RestController
@RequestMapping("/support")
@CrossOrigin("*")
public class SupportController {

	@Autowired
	private SupportService fservice;
	
	@PostMapping
	public Support Add(@RequestBody Support feed) {
		return fservice.addSupport(feed);
	}
}
