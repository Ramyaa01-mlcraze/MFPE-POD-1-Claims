package com.mfpe.claimsmicroservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.mfpe.claimsmicroservice.dto.ClaimStatusDTO;
import com.mfpe.claimsmicroservice.exceptions.InvalidClaimIdException;
import com.mfpe.claimsmicroservice.repository.ClaimRepo;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ClaimStatusService {

	@Autowired
	ClaimRepo claimRepo;
	
	public ResponseEntity<ClaimStatusDTO> getClaimStatus(String id) throws InvalidClaimIdException {
			ClaimStatusDTO claimStatusDTO = new ClaimStatusDTO();
//			String status = claimRepo.getStatus(id);
//			String desc = claimRepo.getDescription(id);
//			if (status == null) {
//				throw new InvalidClaimIdException("Invalid Claim ID");
//			}
			claimStatusDTO.setClaimStatus("Pending Action");
			claimStatusDTO.setClaimDescription("All the fields are successfully verified! Please wait for furthur action");
			claimStatusDTO.setClaimId(id);
			return new ResponseEntity<>(claimStatusDTO, HttpStatus.OK);
	}

}
