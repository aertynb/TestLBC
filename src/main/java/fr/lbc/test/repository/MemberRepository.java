package fr.lbc.test.repository;

import fr.lbc.test.entity.Member;
import org.springframework.stereotype.Repository;
import org.springframework.data.r2dbc.repository.R2dbcRepository;

@Repository
public interface MemberRepository extends R2dbcRepository<Member, Long> {
}
