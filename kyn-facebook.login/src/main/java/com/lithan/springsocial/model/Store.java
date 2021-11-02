package com.lithan.springsocial.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Store {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int storeid;

	@Column(nullable = false)
	private String storename;
	private String storecontactno;
	private String storedes;
	private String storelocation;
	public int getStoreid() {
		return storeid;
	}
	public void setStoreid(int storeid) {
		this.storeid = storeid;
	}
	public String getStorename() {
		return storename;
	}
	public void setStorename(String storename) {
		this.storename = storename;
	}
	public String getStorecontactno() {
		return storecontactno;
	}
	public void setStorecontactno(String storecontactno) {
		this.storecontactno = storecontactno;
	}
	public String getStoredes() {
		return storedes;
	}
	public void setStoredes(String storedes) {
		this.storedes = storedes;
	}
	public String getStorelocation() {
		return storelocation;
	}
	public void setStorelocation(String storelocation) {
		this.storelocation = storelocation;
	}
	@Override
	public String toString() {
		return "Store [storeid=" + storeid + ", storename=" + storename + ", storecontactno=" + storecontactno
				+ ", storedes=" + storedes + ", storelocation=" + storelocation + "]";
	}
	

}

