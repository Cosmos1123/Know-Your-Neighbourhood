package com.lithan.springsocial.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lithan.springsocial.model.Store;
import com.lithan.springsocial.security.oauth2.StoreService;



@RestController

public class StoreController {
	@Autowired
	private StoreService storeService;
	
	@GetMapping("/view")
    @PreAuthorize("hasRole('USER')")
	public List<Store> viewStore(){
		List<Store> stores = storeService.viewStore();
		return stores;
	}
	@GetMapping(value="/store/search/{key}")
	@PreAuthorize("hasRole('USER')")
	
	public List <Store> searchStoreByKey(@PathVariable String key){
		return storeService.searchByKey(key);
	}
}

