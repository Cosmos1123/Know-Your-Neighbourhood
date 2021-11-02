package com.lithan.springsocial.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.lithan.springsocial.model.Store;




@Repository
public interface StoreRepository extends JpaRepository<Store, Integer>{
	@Query(value = "SELECT s FROM Store s WHERE storename LIKE '%' || :key ||  '%'" + 
			"OR storecontactno LIKE '%' || :key ||  '%' " + 
			"OR storedes LIKE '%' || :key ||  '%' " + 
			"OR storelocation LIKE '%' || :key ||  '%' ")
	public List<Store> searchByKey(@Param("key") String key);
	
	

}
