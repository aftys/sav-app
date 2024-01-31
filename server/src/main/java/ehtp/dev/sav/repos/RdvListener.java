package ehtp.dev.sav.repos;

import ehtp.dev.sav.domain.Rdv;
import ehtp.dev.sav.service.PrimarySequenceService;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;


@Component
public class RdvListener extends AbstractMongoEventListener<Rdv> {

    private final PrimarySequenceService primarySequenceService;

    public RdvListener(final PrimarySequenceService primarySequenceService) {
        this.primarySequenceService = primarySequenceService;
    }

    @Override
    public void onBeforeConvert(final BeforeConvertEvent<Rdv> event) {
        if (event.getSource().getId() == null) {
            event.getSource().setId(primarySequenceService.getNextValue());
        }
    }

}
