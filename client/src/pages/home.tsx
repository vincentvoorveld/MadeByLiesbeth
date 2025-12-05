import { useState, useEffect } from "react";
import { Menu, X, Mail, MessageCircle, ChevronUp, Heart, Sparkles, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import heroImage from "@assets/generated_images/Hero_banner_for_portfolio_39c578da.png";
import bracelet1 from "@assets/generated_images/Burgundy_beaded_bracelet_0d678d96.png";
import bracelet2 from "@assets/generated_images/Gold_pearl_bracelet_580d02b0.png";
import bracelet3 from "@assets/generated_images/Rose_gold_charm_bracelet_54ca161e.png";
import bracelet4 from "@assets/generated_images/Burgundy_leather_bracelet_aad462bc.png";
import bracelet5 from "@assets/generated_images/Braided_friendship_bracelet_83304a09.png";
import bracelet6 from "@assets/generated_images/Crystal_burgundy_bracelet_dd024814.png";
import bracelet7 from "@assets/generated_images/Gemstone_chain_bracelet_21f3dda1.png";
import bracelet8 from "@assets/generated_images/Stacked_bracelet_set_8bdd3a18.png";
import knuffel1 from "@assets/generated_images/Crocheted_teddy_bear_d97a1004.png";
import knuffel2 from "@assets/generated_images/Crocheted_pink_bunny_6a7e5bfc.png";
import knuffel3 from "@assets/generated_images/Crocheted_gray_elephant_75232ca1.png";
import knuffel4 from "@assets/generated_images/Crocheted_giraffe_toy_563781c0.png";
import knuffel5 from "@assets/generated_images/Crocheted_orange_cat_8b9fa3b4.png";
import knuffel6 from "@assets/generated_images/Crocheted_brown_owl_0f3f8af1.png";
import knuffel7 from "@assets/generated_images/Crocheted_beige_puppy_e19bada7.png";
import inspiration1 from "@assets/generated_images/Gift_for_friend_inspiration_95eee5c9.png";
import inspiration2 from "@assets/generated_images/Baby_shower_gift_inspiration_aa7c81b8.png";
import inspiration3 from "@assets/generated_images/Spring_inspiration_photo_7e7d3b53.png";
import liesbethPhoto from "@assets/generated_images/Portrait_of_Liesbeth_33c45405.png";
import oorbel1 from "@assets/Oorbellen_1_1764943043382.png";
import oorbel2 from "@assets/Oorbellen_2_1764943043387.png";
import oorbel3 from "@assets/Oorbellen_3_1764943043389.png";
import oorbel4 from "@assets/Oorbellen_4_1764943043390.png";

const bracelets = [
  { id: 1, image: bracelet1, alt: "Burgundy beaded bracelet" },
  { id: 2, image: bracelet2, alt: "Gold pearl bracelet" },
  { id: 3, image: bracelet3, alt: "Rose gold charm bracelet" },
  { id: 4, image: bracelet4, alt: "Burgundy leather bracelet" },
  { id: 5, image: bracelet5, alt: "Braided friendship bracelet" },
  { id: 6, image: bracelet6, alt: "Crystal burgundy bracelet" },
  { id: 7, image: bracelet7, alt: "Gemstone chain bracelet" },
  { id: 8, image: bracelet8, alt: "Stacked bracelet set" },
];

const knuffels = [
  { id: 1, image: knuffel1, alt: "Crocheted teddy bear" },
  { id: 2, image: knuffel2, alt: "Crocheted pink bunny" },
  { id: 3, image: knuffel3, alt: "Crocheted gray elephant" },
  { id: 4, image: knuffel4, alt: "Crocheted giraffe" },
  { id: 5, image: knuffel5, alt: "Crocheted orange cat" },
  { id: 6, image: knuffel6, alt: "Crocheted brown owl" },
  { id: 7, image: knuffel7, alt: "Crocheted beige puppy" },
];

const oorbellen = [
  { id: 1, image: oorbel1, alt: "Driehoek oorbellen zwart roségoud" },
  { id: 2, image: oorbel2, alt: "Druppel oorbellen crème goud" },
  { id: 3, image: oorbel3, alt: "Ovale oorbellen blauw groen" },
  { id: 4, image: oorbel4, alt: "Driehoek oorbellen goud" },
];

const inspirationPhotos = [
  { id: 1, image: inspiration1, caption: "Cadeau voor een vriendin" },
  { id: 2, image: inspiration2, caption: "Kraamcadeau" },
  { id: 3, image: inspiration3, caption: "Lente-inspiratie" },
];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Armbanden", href: "#armbanden" },
  { label: "Oorbellen", href: "#oorbellen" },
  { label: "Gehaakte Knuffels", href: "#knuffels" },
  { label: "Reviews", href: "#reviews" },
  { label: "Werkwijze", href: "#werkwijze" },
  { label: "Inspiratie", href: "#inspiratie" },
  { label: "Contact", href: "#contact" },
  { label: "Veelgestelde vragen", href: "#faq" },
  { label: "Over Made By Liesbeth", href: "#about" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-semibold" data-testid="text-logo">
            Made By Liesbeth
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" data-testid="nav-desktop">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm hover-elevate px-2 py-1 rounded-md transition-colors"
                data-testid={`link-nav-${item.href.replace("#", "")}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            size="icon"
            variant="ghost"
            className="lg:hidden text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden bg-primary border-t border-primary-border" data-testid="nav-mobile">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm hover-elevate px-3 py-2 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.href.replace("#", "")}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-[500px] md:h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" data-testid="text-hero-title">
            Welkom bij Made By Liesbeth
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-6" data-testid="text-hero-subtitle">
            Handgemaakte sieraden en gehaakte knuffels met liefde gemaakt
          </p>
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Elk stuk is uniek en met zorg gemaakt. Of je nu op zoek bent naar een speciaal sieraad of een
            lief gehaakte knuffel, bij Made By Liesbeth vind je iets bijzonders.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white"
            onClick={() => document.getElementById("armbanden")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="button-view-collection"
          >
            Bekijk collectie
          </Button>
        </div>
      </section>

      {/* Armbanden Section */}
      <section id="armbanden" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-section-armbanden">
            Armbanden
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bracelets.map((bracelet) => (
              <Card
                key={bracelet.id}
                className="overflow-hidden cursor-pointer hover-elevate transition-all"
                onClick={() => setLightboxImage(bracelet.image)}
                data-testid={`card-bracelet-${bracelet.id}`}
              >
                <img
                  src={bracelet.image}
                  alt={bracelet.alt}
                  className="w-full aspect-square object-cover"
                  data-testid={`img-bracelet-${bracelet.id}`}
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Oorbellen Section */}
      <section id="oorbellen" className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-section-oorbellen">
            Oorbellen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {oorbellen.map((oorbel) => (
              <Card
                key={oorbel.id}
                className="overflow-hidden cursor-pointer hover-elevate transition-all"
                onClick={() => setLightboxImage(oorbel.image)}
                data-testid={`card-oorbel-${oorbel.id}`}
              >
                <img
                  src={oorbel.image}
                  alt={oorbel.alt}
                  className="w-full aspect-square object-cover"
                  data-testid={`img-oorbel-${oorbel.id}`}
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gehaakte Knuffels Section */}
      <section id="knuffels" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-section-knuffels">
            Gehaakte Knuffels
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {knuffels.map((knuffel) => (
              <Card
                key={knuffel.id}
                className="overflow-hidden cursor-pointer hover-elevate transition-all"
                onClick={() => setLightboxImage(knuffel.image)}
                data-testid={`card-knuffel-${knuffel.id}`}
              >
                <img
                  src={knuffel.image}
                  alt={knuffel.alt}
                  className="w-full aspect-square object-cover"
                  data-testid={`img-knuffel-${knuffel.id}`}
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-section-reviews">
            Wat klanten zeggen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card data-testid="card-review-1">
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic mb-4">
                  "De gehaakte beer was prachtig! Mijn dochter slaapt er elke nacht mee. Echt vakwerk!"
                </p>
                <p className="font-semibold text-sm">– Marieke</p>
              </CardContent>
            </Card>
            <Card data-testid="card-review-2">
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic mb-4">
                  "Prachtige armband gekregen als cadeau. De kwaliteit is echt top en het is precies zoals ik wilde!"
                </p>
                <p className="font-semibold text-sm">– Sophie</p>
              </CardContent>
            </Card>
            <Card data-testid="card-review-3">
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic mb-4">
                  "Liesbeth denkt goed mee en maakt prachtige unieke stukken. Zeer aan te raden!"
                </p>
                <p className="font-semibold text-sm">– Emma</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Werkwijze Section */}
      <section id="werkwijze" className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-section-werkwijze">
            Werkwijze
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card data-testid="card-step-1">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Idee bespreken</h3>
                <p className="text-muted-foreground">
                  We bespreken samen jouw wensen en ideeën voor het perfecte sieraad of knuffel.
                </p>
              </CardContent>
            </Card>
            <Card data-testid="card-step-2">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. Materialen kiezen</h3>
                <p className="text-muted-foreground">
                  Samen kiezen we de mooiste kleuren, materialen en details die bij jou passen.
                </p>
              </CardContent>
            </Card>
            <Card data-testid="card-step-3">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Met liefde handgemaakt</h3>
                <p className="text-muted-foreground">
                  Ik maak jouw bestelling met veel zorg en aandacht, zodat elk stuk uniek is.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Inspiratie Section */}
      <section id="inspiratie" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-section-inspiratie">
            Inspiratie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {inspirationPhotos.map((photo) => (
              <Card key={photo.id} className="overflow-hidden" data-testid={`card-inspiration-${photo.id}`}>
                <img
                  src={photo.image}
                  alt={photo.caption}
                  className="w-full aspect-video object-cover"
                  data-testid={`img-inspiration-${photo.id}`}
                />
                <CardContent className="pt-4">
                  <p className="text-center font-medium">{photo.caption}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6" data-testid="text-section-contact">
            Neem contact op
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Wil je iets bestellen of meer informatie? Neem gerust contact op via e-mail of WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              variant="default"
              className="gap-2"
              onClick={() => window.open("mailto:madebyliesbeth@example.com")}
              data-testid="button-email"
            >
              <Mail className="h-5 w-5" />
              E-mail
            </Button>
            <Button
              size="lg"
              variant="default"
              className="gap-2"
              onClick={() => window.open("https://wa.me/31612345678", "_blank")}
              data-testid="button-whatsapp"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </Button>
          </div>

          {/* Contact Form (Visual Only) */}
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()} data-testid="form-contact">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Naam
                  </label>
                  <Input id="name" placeholder="Je naam" data-testid="input-name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail
                  </label>
                  <Input id="email" type="email" placeholder="je@email.nl" data-testid="input-email" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Bericht
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Vertel me over je wensen..."
                    rows={5}
                    data-testid="textarea-message"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" data-testid="button-submit-form">
                  Verstuur bericht
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-section-faq">
            Veelgestelde vragen
          </h2>
          <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-faq">
            <AccordionItem value="item-1" data-testid="accordion-item-1">
              <AccordionTrigger className="text-left">
                Kan ik iets op maat laten maken?
              </AccordionTrigger>
              <AccordionContent>
                Ja, natuurlijk! Ik maak graag iets speciaals voor je. Neem contact op en we bespreken samen
                jouw wensen en mogelijkheden.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" data-testid="accordion-item-2">
              <AccordionTrigger className="text-left">
                Hoe lang duurt een bestelling?
              </AccordionTrigger>
              <AccordionContent>
                Dat hangt af van het type product en drukte. Gemiddeld ben ik 1-2 weken bezig met een bestelling.
                Voor spoedeisende bestellingen kan ik soms sneller werken.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" data-testid="accordion-item-3">
              <AccordionTrigger className="text-left">
                Hoe onderhoud ik mijn sieraad?
              </AccordionTrigger>
              <AccordionContent>
                Behandel je sieraad met zorg en vermijd contact met water en parfum. Bewaar het op een droge plek
                wanneer je het niet draagt. Bij elk sieraad stuur ik specifieke verzorgingstips mee.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" data-testid="accordion-item-4">
              <AccordionTrigger className="text-left">
                Zijn de gehaakte knuffels veilig voor baby's?
              </AccordionTrigger>
              <AccordionContent>
                Ja! Ik gebruik veilige materialen en zorg ervoor dat alle onderdelen goed vastzitten. Voor baby's
                maak ik altijd geborduurde gezichtjes in plaats van kleine onderdelen.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" data-testid="accordion-item-5">
              <AccordionTrigger className="text-left">
                Wat zijn de kosten voor verzending?
              </AccordionTrigger>
              <AccordionContent>
                Verzendkosten binnen Nederland zijn €3,95. Bij bestellingen boven €50 is verzending gratis.
                Voor internationale verzending neem je het beste contact op voor een offerte.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-section-about">
            Over Made By Liesbeth
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img
                src={liesbethPhoto}
                alt="Liesbeth"
                className="w-full rounded-lg shadow-lg"
                data-testid="img-liesbeth"
              />
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <p className="text-lg">
                Hoi, ik ben Liesbeth! Al jaren ben ik gepassioneerd over handwerk en het maken van unieke,
                persoonlijke creaties.
              </p>
              <p className="text-muted-foreground">
                Het begon allemaal als hobby, maar al snel merkte ik dat ik anderen blij kon maken met mijn
                handgemaakte sieraden en gehaakte knuffels. Elk stuk dat ik maak is uniek en gemaakt met veel
                liefde en aandacht voor detail.
              </p>
              <p className="text-muted-foreground">
                Voor mij is het belangrijk dat elk product speciaal is en precies past bij degene voor wie het
                bestemd is. Of het nu gaat om een armband voor een vriendin, een kraamcadeau, of een knuffel
                voor een kleintje - ik zorg ervoor dat het perfect is.
              </p>
              <p className="text-muted-foreground">
                Graag maak ik ook iets speciaals voor jou. Neem gerust contact op en we bespreken samen wat ik
                voor je kan maken!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm" data-testid="text-copyright">
            © 2025 Made By Liesbeth | Handgemaakt met liefde
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          size="icon"
          className="fixed bottom-6 right-6 rounded-full shadow-lg z-40"
          onClick={scrollToTop}
          data-testid="button-scroll-top"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}

      {/* Lightbox */}
      <Dialog open={!!lightboxImage} onOpenChange={() => setLightboxImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden" data-testid="dialog-lightbox">
          <DialogTitle className="sr-only">Product afbeelding</DialogTitle>
          <DialogDescription className="sr-only">
            Vergroot productfoto voor een gedetailleerde weergave
          </DialogDescription>
          {lightboxImage && (
            <img
              src={lightboxImage}
              alt="Product detail"
              className="w-full h-auto"
              data-testid="img-lightbox"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
