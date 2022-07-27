package com.mfpe.claimsmicroservice.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "claims")

@Getter
@Setter 
@NoArgsConstructor 
@AllArgsConstructor
public class Claim {

	@Id
    @Column(name="CID")
	private String claimId;
	
    public String getClaimId() {
		return claimId;
	}

	public void setClaimId(String claimId) {
		this.claimId = claimId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public double getClaimAmount() {
		return claimAmount;
	}

	public void setClaimAmount(double claimAmount) {
		this.claimAmount = claimAmount;
	}

	public String getHospitalId() {
		return hospitalId;
	}

	public void setHospitalId(String hospitalId) {
		this.hospitalId = hospitalId;
	}

	public String getBenefitId() {
		return benefitId;
	}

	public void setBenefitId(String benefitId) {
		this.benefitId = benefitId;
	}

	public String getPolicyId() {
		return policyId;
	}

	public void setPolicyId(String policyId) {
		this.policyId = policyId;
	}

	public String getMemberId() {
		return memberId;
	}

	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}
	
	@Column(name="Status")	
	private String status;
    
    @Column(name="Description")	
	private String description;
    
    @Column(name="Remarks")	
	private String remarks;
    
    @Column(name="Claim_Amount")	
	private double claimAmount;

   
    @Column(name="hospitalId")
    private String hospitalId;
    
  
    @Column(name="benefitId")
    private String benefitId;
    
    @Column(name="PolicyId")
    private String policyId;
    
    @Column(name="MemberId")
    private String memberId;
    
    
}
