package fr.lbc.test.controller;

import fr.lbc.test.entity.Member;
import fr.lbc.test.service.MemberService;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.List;


@RestController
public class MemberController {

    @Autowired
    private MemberService memberService;

    @GetMapping("/api/member")
    public Flux<Member> getAllUsers() {
        return memberService.findAll();
    }

    @GetMapping("api/member/{id}")
    public Mono<Member> FindById(@PathVariable Long id) {
        return memberService.findById(id);
    }

    @PostMapping("api/member/post")
    public ResponseEntity<Mono<Member>> createMember(@RequestBody @NotNull String name) {
        var member = memberService.save(name);
        return ResponseEntity.ok(member);
    }
}
