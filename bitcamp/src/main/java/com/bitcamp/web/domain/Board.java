package com.bitcamp.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class Board {
	private String bbsSeq,title,content,regdate,id;
	
}
