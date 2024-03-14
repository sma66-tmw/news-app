
export default function Card() {
  const props = {
    image: 'https://ichef.bbci.co.uk/images/ic/1200x675/p0hg13f8.jpg',
    title: 'Panorama - Trump: The Sequel?',
    text: "BBC iPlayer - Panorama Trump: The Sequel? Justin Webb and Marianna Spring travel from the frozen plains of Iowa to the swing state of Georgia to explore Donald Trump’s enduring appeal and look ahead to an unprecedented American election year. More Duration29 mins First shown4 Mar 2024 Available for 11 months Watchlist Download Audio DescribedSign Language Episodes Episodes This episode Trump: The Sequel? Royal Mail: Where’s My Post? Panorama speaks to those who believe that Royal Mail's survival is in the balance. 29 mins Hamas’s Secret Financial Empire Following the attacks of 7 October, Israel has vowed to destroy Hamas. But can it? 29 mins Alzheimer’s: A Turning Point? Could two new drugs prove a turning point in the treatment of Alzheimer’s disease? 29 mins Sudden Child Deaths: The Search for Answers Richard Bilton investigates sudden unexplained deaths in children. 29 mins Midwives under Pressure Panorama investigates the maternity care crisis that is putting women and babies at risk. 29 mins Britain's Crumbling Schools An investigation into the poor state of some of Britain’s school buildings. 29 mins Britain’s Obesity Crisis: Are Weight-Loss Drugs the Answer? The new generation of anti-obesity drugs hailed as game changers for the NHS and patients. 29 mins Will My Crime Be Solved? Bronagh Munro meets the victims left to investigate their own crimes. 29 mins Care Workers under Pressure Panorama investigates a care home short of staff. 29 mins The Billionaire Bishop and the Global Megachurch Panorama uncovers allegations about the Universal Church of the Kingdom of God. 29 mins The Water Pollution Cover-Up Why do some of the worst offending water companies have such good environmental ratings? 29 mins My Teacher the Abuser: Fighting for Justice The abuse victims campaigning for one teacher to return to the UK to face justice. 58 mins Putin and Ukraine's Stolen Children What happened to children taken by Russian forces from a children’s home in Kherson? 59 mins Why Are We Still Searching for Fossil Fuels? Investigating why oil, coal and gas exploration is booming despite climate commitments. 29 mins Boohoo's Broken Promises Panorama investigates fast fashion giant Boohoo. 29 mins Prime Suspect: Who Took Madeleine McCann? Richard Bilton seeks to find out more about the man suspected of killing Madeleine McCann. 58 mins At War: Crisis in the Middle East Panorama reports on the conflict between Israel and Hamas. 29 mins Challenging Putin: Moscow and the Mutiny Jane Corbin investigates what really happened during the mutiny led by Yevgeny Prigozhin. 29 mins The Big Mortgage Squeeze The homeowners feeling the squeeze as they come off cheaper fixed-rate mortgages. 29 mins The Abercrombie Guys: The Dark Side of Cool Investigating a dark secret in the US fashion industry. 59 mins Downfall of the Crypto King Panorama explores the breakneck rise and sensational fall of Sam Bankman-Fried. 58 mins Downfall of the Crypto King - Extended Version Panorama explores the breakneck rise and sensational fall of Sam Bankman-Fried. 90 mins The Dark Side of Ballet Schools Investigating claims of bullying and body shaming at two of the UK's top ballet schools. 29 mins Teenage Vaping: What’s the Harm? Rachel Burden investigates the youth vaping phenomenon. 28 mins Lucy Letby: The Nurse Who Killed Lucy Letby has been convicted of murdering babies. What turned a nurse into a killer? 58 mins Beyond Human: Artificial Intelligence and Us Reporter Lara Lewington speaks to some of the so-called 'godfathers' of AI. 29 mins The Millionaire Who Cheated a Council How a businessman spent council cash on himself and left local people to pay the price. 29 mins Debt Trap: Who's Cashing In? Investigation of the booming debt management industry and the offering of IVAs. 29 mins Westminster's Toxic Culture MPs and staff give accounts of sexual harassment and bullying in Parliament. 29 mins Is China Watching You? Panorama investigates China’s global surveillance operation. 29 mins The Antidepressant Story The companies trying to conceal concerns about their antidepressants. 58 mins Electric Cars: Is It Time to Buy? Richard Bilton takes a trip to find out what the electric vehicle revolution feels like. 29 mins Ultra-Processed Food: A Recipe for Ill Health? Investigating a link between chemicals in ultra-processed foods and cancer and diabetes. 29 mins Landfill: Britain’s Toxic Secrets Every year, tonnes of waste are dumped in landfills, but how safe are they? 29 mins Private ADHD Clinics Exposed How some private clinics are diagnosing ADHD after unreliable online assessments. 29 mins",
    publish_date: '2024-03-05 09:14:00'
  }
  return (
    <div className="column is-half-tablet is-half-desktop is-one-third-widescreen is-one-third-widescreen">
      <div className="listing-card card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={
                props.image ||
                "https://bulma.io/images/placeholders/1280x960.png"
              }
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
              <h6 className="title has-text-link">{props.title}</h6>

            <p>{props.text}</p>
            <br />
            <time>{props.publish_date.slice(0, -3)}</time>
          </div>
        </div>
      </div>
    </div>
  );
}
