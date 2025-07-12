import { Card, CardHeader, CardContent } from "../ui/card";
import './Experience.css'
function Experience({cardHeader,cardExperience, cardContent}: {cardHeader: any, cardExperience: any, cardContent: any}) {
  return (
    <div className="experienceWrapper">
      <Card className="Entirecard">
        <CardHeader>
            <strong>{cardHeader}</strong>
            <i>{cardExperience}</i>
        </CardHeader>
        <CardContent>
            {cardContent}
        </CardContent>
      </Card>
    </div>
  );
}

export default Experience;