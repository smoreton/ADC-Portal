package com.capgemini.adcportal.security.service;

import com.capgemini.adcportal.model.security.Authority;
import com.capgemini.adcportal.model.security.User;
import com.capgemini.adcportal.security.JwtUser;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.Serializable;
import java.util.Collection;

public class JwtAuthenticationResponse implements Serializable {

    private static final long serialVersionUID = 1250166508152483573L;

    private final String token;
    private Collection<? extends GrantedAuthority> auths;
    private String fullName;


    public JwtAuthenticationResponse(String token, JwtUser userDetails) {
        this.token = token;
        if(userDetails!=null) {
            this.auths = userDetails.getAuthorities();
            this.fullName = userDetails.getFirstname() + " " + userDetails.getLastname();
        }
    }

    public String getToken() {
        return this.token;
    }

    public Collection<? extends GrantedAuthority> getAuths() {
        return auths;
    }

    public void setAuths(Collection<? extends GrantedAuthority> auths) {
        this.auths = auths;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }
}
