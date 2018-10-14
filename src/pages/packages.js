import React from "react";
import Layout from "../components/layout/index";
import Banner from "../components/banner";
import Divider from "../components/page_divider";
import ContactGinaCta from "../components/contact_gina_cta";
import Section from "../components/section";

const transformationSessions = [
  "Nature Session I*",
  "MFR Session I",
  "Emotional Freedom Techniques Session I",
  "Diet/Lifestyle Session I",
  "Yoga/Meditation I",
  "Myofascial Session II",
  "Emotional Freedom Techniques Session II",
  "Diet/Lifestyle Session II",
  "Yoga/Meditation II",
  "Nature Session II**"
];
const SessionName = ({ name }) => (
  <div>
    {
      (/\*{2,}$/.test(name))
        ? <>{name.replace(/\*+$/,"")}<span className="green">**</span></>
        : (/\*$/.test(name))
          ? <>{name.replace(/\*+$/,"")}<span className="green">*</span></>
          : name
    }
  </div>
)

const MotheringModules = () => (
  ["Inner Child(ren)/Inner Mother", "Mother As Eternal Nurturer", "Divine Mother Within Loves What Arises"]
    .map((title, idx) => (
      <div key={`mothering-module-${idx}`}>
        <h4 style={{ textDecoration: "underline", margin: "1.5rem 0 0.5rem 0" }}>Module {idx + 1} - {title}</h4>
        <div>Four sessions (5.5 hours), followed by a VIP day (3.5 hours)</div>
        <div>Nine hours of session time in total</div>
      </div>
    ))
);

const PackagesPage = () => (
  <Layout>
    <Banner flag="packages" />
    <div className="container">
      <Section
        title={"Packages"}
        classes="big-lines"
        subsections={[`The quickest way to transform your life is to commit to something beneficial and then see it through. By choosing one of these packages and committing to it, you are increasing your chances exponentially to realize life-changing breakthroughs and the results you desire.`]}
      />
      <Divider />
      <div className="section ">
        <h2>Basic Series: Beginner Package</h2>
        <h3 className="green">Taste Freedom!</h3>
        <p className="light-green">Session Intervals: 6 session hours over three consecutive weeks (3 meetings)</p>
        <p>
          This program is for those wanting to experience a deepening within themselves, to reveal what’s really going on with a current issue or feelings inside.
        </p>
        <p>
          Healing is a process and when we treat it as such we give ourselves the chance to heal, and to reveal how our current situation is showing up for our benefit. So common is the mindset today that healing is a one time event, like a revolving door. This keeps us at a surface level.  It can even be a disempowering act. To see healing as a process will foster a new relationship with our thoughts, feelings, and life’s many situations.
        </p>
        <p>
          This series goes deep in a short amount of time, and because we meet for three consecutive weeks, two sessions each time, it is offered for less than the cost for six individual sessions. A great benefit being the intensity of the six sessions in a short period of time. It’s like a mini-intensive with powerful results.
        </p>
        <p>
          These six sessions offer insights, a shift in relationship with self and others, and most importantly will lay the groundwork for establishing a deep practice that can be continued for life.
        </p>
        <div className="package-series-list">
          <h3>Who this series is for:</h3>
          <ul>
            <li>You are a new client</li>
            <li>You feel unfulfilled in life, job, or relationships</li>
            <li>You experience physical or emotional pain</li>
            <li>You are interested in deepening the mind/body connection</li>
          </ul>
        </div>
        <div className="package-series-list">
          <h3>Result:</h3>
          <ul>
            <li>Increased body/mind awareness</li>
            <li>New perspective of current challenges</li>
            <li>Less stress</li>
            <li>Clarity on next steps</li>
          </ul>
        </div>
        <div className="package-series-list">
          <h3>You Receive:</h3>
          <ul>
            <li>(3) Myofascial release (MFR) sessions</li>
            <li>(3) Emotional freedom techniques (EFT) sessions. <br/>MFR and EFT sessions are back to back, for three consecutive weeks</li>
            <li>Home play techniques to increase wellness in between sessions</li>
          </ul>
        </div>

        <p className="light-green">Start here if you are in the beginnings of wanting to grow your relationship with your inner self!</p>
      </div>

      <Divider showLogo={false} />
      <div className="section ">
        <h2>Transformation Series</h2>
        <h3 className="green">Release, Renew, Reset</h3>
        <p className="light-green">Session Intervals:10 session hours over ten consecutive weeks (10 meetings)</p>

        <p>
          Experience Greater Health and Wellness; An Opportunity to Transform!
        </p>
        <p>
          This program is created for those ready to go deep with a particular issue
          (physical/mental/spiritual) so that lessons can be seen, roots found,
          and symptoms transformed. This program is also be beneficial for those
          interested in deepening layers of awareness and inner-understanding.
          The below ten sessions occur over the course of a three month period or
          less, so as to keep the energy and intensity. This commitment in a set
          time frame is wonderfully beneficial for the client and helps the process take form.
        </p>

        <div className="package-series-list">
          <h3>Who this series is for:</h3>
          <ul>
            <li>You are ready to explore a physical or emotional issue at a new level of depth</li>
            <li>You are ready to commit to a new level of well being</li>
            <li>You are interested in shifting a habitual pattern</li>
            <li>You would like to know yourself on a deeper level</li>
            <li>You would like to transform a relationship with yourself or others</li>
          </ul>
        </div>
        <div className="package-series-list">
          <h3>Result:</h3>
          <ul>
            <li>A transformation of the original issue</li>
            <li>Expanded self awareness</li>
            <li>Clear path of action for continued wellness</li>
            <li>Greater depth, clarity, and intuition</li>
          </ul>
        </div>
        <div className="package-series-list">
          <h3>You Receive:</h3>
          <ul>
            <li>(2) Non-linear intuition sessions (in nature if time and circumstance allows)<span className="green">*</span> </li>
            <li>(2) Myofascial release sessions</li>
            <li>(2) Emotional freedom techniques sessions</li>
            <li>(2) Diet and lifestyle sessions</li>
            <li>(2) Yoga and meditation sessions</li>
            <li>Homeplay techniques to increase wellness in between sessions</li>
          </ul>
        </div>
        <p>
          <span className="green">*</span> We use journaling, imagery, metaphors,
          and simple nature practices to activate the non-linear creative brain.
          Like bookends, the first and last sessions of the Transformation Series
          hold together all that's inside. The first session gives meaning and
          intention for what’s to come and the last session helps us reflect
          on all that has come, as well as it sets the tone for lasting wellness.
        </p>
        <p className="light-green">
          Start here  if you are ready for major change, deep work, healing from childhood wounds, and all the benefits that come from taking full responsibility for your life's creations!
        </p>
      </div>

      <Divider showLogo={false} />
      <div className="section ">
        <h2>Divine Inner Mothering Series: Loving Our Inner Child</h2>
        <h3 className="green">Shadow and Light Unite</h3>
        <p className="light-green">Session Intervals: 27 session hours over twelve consecutive weeks (15 meetings)</p>
        <p>In this series, we connect with the parts of us that have been repressed, left behind, hurt and hidden. What uprises is our inner child, an innocent, sweet-hearted being who got lost in the ups and downs of life and life’s situations.</p>
        <p>With our own hand at being divine mother, we nurture the inner child into a place of love and acceptance as we integrate all the fragmented pieces of our life back into the whole of who we are. Acting as a divine mother we care, love, provide, teach, nurture, and celebrate ourselves with infinite and powerful energy our whole lives through.</p>
        <p>Our birth mothers and fathers provided this care when we were young, and acted as the physical manifestation of the unseen mother aspect. Whether our caregivers filled this role with mild, medium, or intense enthusiasm, likely there were parts of us that went unseen or unheard, or parts that felt frightened, hurt, misunderstood, or traumatized. There is so much that goes on inside a child’s mind and heart that is inexpressible with that child’s intelligence, vocabulary, and emotional maturity.</p>
        <p>The many disowned parts of us that coalesce into our inner child are but hidden treasures within us, they are our emotional needs unmet, waiting to be met, by us, their Beloved Parent. To touch the child within, to hear and know these unmet needs, and to build a conscious relationship between the inner child and inner mother is a union like no other. It forms a bond that can help us in every situation. When our adult self and awareness unite with the pain of the child, without judgement, we automatically feel cared for, seen, heard, loved, and befriended.</p>
        <p>We reveal what has long been buried to discover the teachings and integrate the lessons and gifts that only the inner child can so innocently illumine.</p>
        <div className="package-series-list">
          <h3>Who this series is for:</h3>
          <ul>
            <li>You are aware of self defeating habits and would like to shift them</li>
            <li>You are interested in exploring shadow aspects for fuller integration of self</li>
            <li>You feel grief, shame, anger, fear, or guilt</li>
            <li>You would like to enjoy better relationships with yourself and others</li>
            <li>You would like to open up to your inner gifts and talents</li>
            <li>You would like to be free from the confines of your emotional state</li>
            <li>You would like to increase your intuitive abilities</li>
            <li>You feel called to heal childhood trauma</li>
          </ul>
        </div>
        <div className="package-series-list">
          <h3>Result:</h3>
          <ul>
            <li>Increased emotional awareness</li>
            <li>Increased depth of clarity</li>
            <li>Greater confidence</li>
            <li>Greater peace with the people in your life</li>
            <li>Greater knowing of your role as co-creator</li>
            <li>Increased ability to address situations</li>
            <li>Increased ability to choose what is in alignment with you, and to walk away lovingly from what is not</li>
            <li>Increased ability for intimacy</li>
            <li>Heart energy expansion</li>
            <li>Embodiment of the divine feminine</li>
          </ul>
        </div>
        <div className="package-series-list">
          <h3>You Receive:</h3>
          <p style={{ marginBottom: "0.25rem"}}>Three modules each consisting of:</p>
          <ul>
            <li>right brain intuition session</li>
            <li>myofascial release session</li>
            <li>emotional freedom techniques session</li>
            <li>sound healing (tuning forks) session</li>
            <li>VIP day, a 3.5 hour outing for your most innocent and playful aspect of your inner child</li>
            <li>home play techniques to increase wellness in between sessions</li>
          </ul>
        </div>
      </div>
      <ContactGinaCta />
    </div>
  </Layout>
);

export default PackagesPage;



{/* <p>
          For the purposes of this conversation, we can think of Divine Mother as
          the Earth, as God, as Mother Mary, as Nature, or as any other magnificent
          powerful nurturing force. Divine mother cares, loves, provides, teaches,
          nurtures, and celebrates us with infinite and powerful energy our whole
          lives through. Even if we don’t see her hand, she is here. Our birth mothers
          and fathers provided this care when we were young, and acted as the physical
          manifestation of the unseen mother aspect. Whether our caregivers filled this
          role with mild, medium, or intense enthusiasm, likely there were parts of us
          that went unseen or unheard, or parts that felt frightened, hurt, misunderstood,
          or traumatized. There is so much that goes on inside a child’s mind and heart
          that is inexpressible with that child’s intelligence, vocabulary, and emotional
          maturity. In this series, we seek out these parts that were left behind, and with
          our own hand at being Divine Mother, we nurture and integrate them back into the whole of who we are.
        </p>
        <p>
          The many disowned parts of us that coalesce into our inner child are but hidden
          treasures within us, they are our emotional needs unmet, waiting to be met, by us,
          their Beloved Parent. To touch the child within, to hear and know these unmet needs,
          and to build a conscious relationship between the inner child and inner mother is a
          union like no other. It forms a bond that can help us in every situation. When our
          adult self and awareness unite with the pain of the child, without judgement, we
          automatically feel cared for, seen, heard, loved, and befriended.
        </p>
        <p>
          Reveal what has long been buried to discover the teachings and integrate
          the lessons and gifts that only the inner child can so innocently illumine.
        </p>
        <MotheringModules />
        <p>
          Each module follows the same standard format while each one offers the opportunity for
          deeper work. It’s like building a house, we start with the foundation, and build
          from here. Clients are able to do Module One alone, and to continue with Modules
          Two and Three when inspired to go deeper. The client can also choose to sign on
          for all three at the start. Sometimes the commitment to oneself in a big way can greatly
          benefit the healing, sometimes the benefit comes from making smaller commitments,
          especially if the fear too great to dive deep into the waters all at once…
        </p>
        <p>
          The basic format of each module is as follows:
        </p>
        <p>
          1. Intro/discussion/Divine Mothering Connection (1.5 hours)
        </p>
        <p>
          In the first session, we come together to discuss and share and play with what aspects
          of your life are already built and standing; what parts of your current
          life are enjoyable and sturdy, and what parts might be breaking down,
          loosing integrity, or are hindrances; we also look to see what kind of
          debris might be buried underneath our patterns, habits, and behaviors;
          as well as what may be ready to be released and/or revealed. We will
          be in communication with inner child aspects so that we can learn
          where our Inner Mother can help. This exploration of where we are at
          currently sheds light on how the inner child is fairing with life,
          and let’s us see where Inner Mothering can bring greater harmony.
        </p>
        <p>
          This session will unfold as a dynamic exploration created by the two
          of us, no prior understanding or inner knowledge by the client is necessary.
        </p>
        <p>
          A few minutes of gratitude will be practiced at the end of this session,
          as well as every session hereafter. Just as it’s important for us to
          feel into what our emotional body speaks, its also important for us
          to ground into gratitude, as an acknowledgement of all the goodness
          that is around us, even when our vision is cloudy or can’t feel it.
          In fact it is exactly now, that we need it most.
        </p>
        <p>2. Emotional Freedom Techniques (EFT) (1.5 hours)</p>
        <p>When beginning or advancing with deep inner work, it’s very common for us to experience
          fear, guilt, and shame either about certain situations or about the people
          in our story with whom we have an emotional bond. This guilt and shame
          can block progress, and prevent deep work. In some ways it even keeps us
          from knowing the inner child aspects at all. EFT is a handy, simple,
          and effective tool we use to feel the fear, guilt, and shame so that
          it can loosen its hold on us. This will free us to move forward while
          still experiencing deep care for ourself and others.
        </p>
        <p>
          As the modules continue we will explore the common unconscious story’s, beliefs,
          and patterns that are operating as our background programs. And we will
          feel into the origin of some of these programs, not that the how and
          why are important, but just to acknowledge and thank these things that
          most likely served as a seemingly important defensive structure when
          young. Most programs created by the mind are meant to protect us,
          but almost always the protection is very limited, and often hurts us
          rather than helps us in the long run. When the mind creates a program
          and sets it in motion, it has no expiration date, so as adults, most
          of us are walking around with programs that were created decades ago by a child’s mind.
        </p>
        <p>
          As we go deeper with EFT in Module Two, we will explore our conflicted
          feelings, and we will look into the minds inclination to link one event
          to another. This can keep us locked into a thought/feeling cycle that
          perpetuates old and faulty links. In one sense cause and effect are
          real, as in the law of karma, in another sense cause and effect are an
          illusion created by the mind. Let’s play with this paradox here and see what insights come.
        </p>
        <p>While working with EFT in Module Three, we will work with the separated
          wants, desires, wishes, longings, and the pain of childhood. All these
          parts long for acknowledgement above anything else. The point of this
          is not to get what we want, it is to acknowledge fully the part of us
          that ‘wants’. We can rest in this place of acknowledgment. We are
          never wrong for wanting. But it can feel that way when young, when our
           wants aren’t met, or worse, ridiculed, criticized, or punished.
         </p>
         <p>3. Unwinding/Myofascial Release (MFR) (1.5 hours)</p>
         <p>This session will begin and end with a body directed unwinding,
           which is a technique used often in MFR to release holding patterns which
           create all kinds of tension, strain, pain, and illness. Unwinding is
           an extremely beneficial activity that is optimally engaged in daily
           for a minimum of 10 minutes. No prior knowledge necessary. In-between
           the two unwinding portions of this session, will be a one hour MFR
           session, to help further explore holding patterns, release restrictions
           in the body/mind, and provide for a deepening of consciousness in the
           physical/mental/emotional realm. The inner child inside, who at its core
           is an innocent being that Loves and wants Love, will likely feel
           invited to surface fairly easily here. Again, by getting to know the
           inner child, we also learn exactly the places in need of Inner Mothering.
         </p>
         <p>MFR is a type of bodywork, that sees the body and mind as an integrated
           being. It uses hands on techniques to find and release areas of
           restriction in the body/mind. Sometimes this release comes through a
           client insight, sometimes can feel purely physical, sometimes purely
           emotional. It is often subtle, yet in time realized as quite profound.
           No two sessions are alike. Like an onion, layer by layer is peeled
           away for us to see when the time is right. There is no force and
           no expectation. A holding and an allowing of what’s here.
         </p>
         <p>4. Gratitude/Sound Healing (1 hour)</p>
         <p>We have likely heard of gratitude journals, and the benefits of
           expressing gratitude even when we are not feeling grateful. Isn’t it
           interesting how it feels like hard labor to exercise this underused
           muscle of gratitude, and all too often we put it off or rationalize
           that we’ll have gratitude when something appears that is worthy of gratitude.
         </p>
         <p>The magic happens though when we move into a grateful place even though
           our mind tells us we have no reason to be grateful. In this session we
           will craft a gratitude practice and pair it with a tuning fork sound
           healing. The sounds created by tuning forks can reach deep aspects within
           as well as the sounds vibrational ability to spike nitric oxide in the
           body which creates a balancing effect on the autonomic nervous system
           as well as signals a natural release of anti-bacterial, anti-viral,
           and free radicals on a microcellular level. The inner child loves to
           be cared for as all children do, and will enjoy this playful adventure.
         </p>
         <p>5. VIP Day (3.5 hours)</p>
         <p>This last session serves as a special time of nourishment for you and
           the little child(ren) within. At first the idea might feel over the
           top or like too much attention. If you allow it to, it’ll likely shift
           into an amazing experience, one you’ll want to repeat on your own as
           often as you can. This time together is created before hand to craft
           outings/innings that celebrate and honor you and the little child within,
           now with Divine Mother to guide and care for all these aspects. The
           activities range from story's, walks, nature activities, healthy food,
           special requests, etc. It’ll be a day to remember!
         </p>
         <p>When we open and allow for our Inner Mother to develop and nurture
           our Divine Mothering, we are always in good company, and always have a
           growing bond in place. Imagine what it’d be like to feel the care of a
           nurturing, kind, compassionate, and loving mother always within. This
           can be developed, and once developed is always available.
         </p> */}
