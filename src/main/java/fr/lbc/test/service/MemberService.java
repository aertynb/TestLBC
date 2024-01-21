package fr.lbc.test.service;

import fr.lbc.test.entity.Member;
import fr.lbc.test.repository.MemberRepository;
import jakarta.validation.constraints.NotNull;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDate;

@Service
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(@NotNull MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Flux<Member> findAll() {
        return memberRepository.findAll();
    }

    public Mono<Member> findById(Long id) {
        return memberRepository.findById(id);
    }

    public Mono<Member> save(@NotNull String name) {
        var member = new Member();
        member.setName(name);
        member.setCreation(LocalDate.now());
        return memberRepository.save(member);
    }
}
