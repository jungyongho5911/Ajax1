package com.bitcamp.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bitcamp.web.domain.Member;

@Controller
@RestController
@RequestMapping("/member")
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@RequestMapping(value="/login",
			method=RequestMethod.POST,
			consumes="application/json")
	public @ResponseBody Map<?,?> login(
			@RequestBody Member m) {
		Map<String,String> map = new HashMap<>();
		logger.info("welcome {}","member!");
		logger.info("전달된ID {}",m.getUserid());
		logger.info("전달된PASS {}",m.getPassword());
		logger.info("전달된PASS {}",m.getPassword());
		map.put("flag", "success");
		return map;
	}
}
