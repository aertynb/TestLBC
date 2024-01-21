package fr.lbc.test.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    @JsonFormat
            (shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    @Column(name = "creation")
    private LocalDate creation;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public LocalDate getCreation() {
        return creation;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCreation(LocalDate creation) {
        this.creation = creation;
    }

    @Override
    public String toString() {
        return "Member{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", dateOfCreation=" + creation +
                '}';
    }
}
