package com.usedbook;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
@MapperScan("com.usedbook.mapper")
public class UsedBookApplication {

    public static void main(String[] args) {
        SpringApplication.run(UsedBookApplication.class, args);
    }

}
