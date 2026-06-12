import ProjectLayout from '@/components/ProjectLayout'
import ImageLightbox from '@/components/ImageLightbox'

// Replace these paths with your actual image imports
import aur01 from '@/assets/aur-1.webp'
import aur02 from '@/assets/aur-2.webp'
import aur03 from '@/assets/aur-3.webp'
import aur04 from '@/assets/aur-4.webp'
import aur05 from '@/assets/aur-5.webp'
import aur06 from '@/assets/aur-6.webp'
import aur07 from '@/assets/aur-7.webp'
import aur08 from '@/assets/aur-8.webp'
import aur09 from '@/assets/aur-9.webp'
import aur10 from '@/assets/aur-10.webp'
import aur11 from '@/assets/aur-11.webp'
import aur12 from '@/assets/aur-12.webp'
import aur13 from '@/assets/aur-13.webp'
import aur14 from '@/assets/aur-14.webp'
import aur15 from '@/assets/aur-15.webp'
import aur16 from '@/assets/aur-16.webp'
import aur17 from '@/assets/aur-17.webp'
import aur18 from '@/assets/aur-18.webp'
import aur19 from '@/assets/aur-19.webp'
import aur20 from '@/assets/aur-20.webp'
import aur21 from '@/assets/aur-21.webp'
import aur22 from '@/assets/aur-22.webp'
import aur23 from '@/assets/aur-23.webp'

const gallery = [
  aur01,
  aur02,
  aur03,
  aur04,
  aur05,
  aur06,
  aur07,
  aur08,
  aur09,
  aur10,
  aur11,
  aur12,
  aur13,
  aur14,
  aur15,
  aur16,
  aur17,
  aur18,
  aur19,
  aur20,
  aur21,
  aur22,
  aur23,
]

const Aur = () => {
  return (
    <ProjectLayout
      title="Aur"
      subtitle="Lighting objects inspired by nature and the emotional qualities of light"
      icon="◜"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            Year
          </h3>
          <p className="text-lg text-foreground">2025</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            Role
          </h3>
          <p className="text-lg text-foreground">
            Brand Designer, Fabricator
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            Focus
          </h3>
          <p className="text-lg text-foreground">
            Branding, Product Design, Fabrication
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Overview
        </h2>

        <p className="text-lg text-muted-foreground">
          Aur is a collection of sculptural lighting objects inspired by
          erosion, growth, and the quiet relationship between light and
          shadow. Drawing from forms found in driftwood, bark, and bamboo,
          the project explores how lighting can create emotional experiences
          through material, texture, and form. I led the branding, visual
          identity, and fabrication of the collection.
        </p>
      </div>

      <div className="bg-card/50 rounded-lg p-8 border border-border mb-16">
        <h2 className="text-2xl font-semibold mb-8">
          Design Principles
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-3">
              Connection to Nature
            </h3>

            <p className="text-muted-foreground">
              Inspired by erosion and growth, each form echoes the
              asymmetry and rhythm found in natural materials.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Calm Through Imperfection
            </h3>

            <p className="text-muted-foreground">
              Organic asymmetry and textured surfaces evoke serenity and
              acceptance, embracing beauty in imperfection.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Shadow as Poetry
            </h3>

            <p className="text-muted-foreground">
              Light and void coexist. Crevices become spaces for pause,
              reflection, and depth.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Material Expression
            </h3>

            <p className="text-muted-foreground">
              AUR explores the relationship between organic forms and
              industrial fabrication processes.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-card/50 rounded-lg p-8 border border-border mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Branding
        </h2>

        <p className="text-muted-foreground mb-8">
          The visual identity extends the same philosophy present in the
          physical objects. Rounded forms, soft geometry, and an earthy
          palette communicate warmth and stillness while maintaining
          clarity and legibility.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-semibold mb-4">
              Logo System
            </h3>

            <ul className="space-y-2 text-muted-foreground">
              <li>• Primary and secondary variants</li>
              <li>• Scalable mark system</li>
              <li>• Light and dark applications</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Color Palette
            </h3>

            <ul className="space-y-2 text-muted-foreground">
              <li>• Deep Charcoal Green</li>
              <li>• Burnt Umber</li>
              <li>• Concrete Mist</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Typography
            </h3>

            <ul className="space-y-2 text-muted-foreground">
              <li>• Nohemi typeface</li>
              <li>• Rounded geometry</li>
              <li>• Consistent hierarchy system</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-card/50 rounded-lg p-8 border border-border mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Fabrication
        </h2>

        <p className="text-muted-foreground">
          Beyond branding, I participated in the fabrication process,
          translating natural references into physical forms. The project
          investigated how material properties and manufacturing methods
          influence the perception of light and atmosphere.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">
          Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="bg-card/30 rounded-lg overflow-hidden border border-border"
            >
              <ImageLightbox
                src={image}
                alt={`AUR image ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </ProjectLayout>
  )
}

export default Aur
