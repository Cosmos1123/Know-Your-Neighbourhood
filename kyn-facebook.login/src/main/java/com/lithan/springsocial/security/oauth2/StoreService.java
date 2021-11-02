package com.lithan.springsocial.security.oauth2;

import java.util.List;

import com.lithan.springsocial.model.Store;



public interface StoreService {
	public List<Store> viewStore();
	public List<Store> searchByKey(String Key);
}
