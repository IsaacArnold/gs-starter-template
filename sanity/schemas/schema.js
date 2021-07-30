// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Document schemas
import siteSettings from "./documents/siteSettings";
import tag from "./documents/tag";
import social from "./documents/social";
import page from "./documents/page";

// Object types
// import bodyPortableText from "./objects/bodyPortableText";
import feature from "./objects/feature";
import openGraph from "./objects/openGraph";

// Plugs types
import hero from "./plugs/hero";
import features from "./plugs/features";
import socialCallout from "./plugs/socialCallout";
import buttons from "./plugs/buttons";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "bing",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    hero,
    buttons,
    tag,
    features,
    feature,
    social,
    page,
    openGraph,
    socialCallout,
    siteSettings,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
