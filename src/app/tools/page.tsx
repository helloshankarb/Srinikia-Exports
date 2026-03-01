
"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Layout, Search, Copy, Check } from "lucide-react";
import { generateMarketingCopy } from "@/ai/flows/generate-marketing-copy";
import { generateSeoMetaTags } from "@/ai/flows/generate-seo-meta-tags";
import { useToast } from "@/hooks/use-toast";

export default function ToolsPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Marketing Copy State
  const [details, setDetails] = useState("");
  const [marketingResult, setMarketingResult] = useState<any>(null);

  // SEO State
  const [pageContent, setPageContent] = useState("");
  const [seoResult, setSeoResult] = useState<any>(null);

  const handleMarketingSubmit = async () => {
    if (!details) return;
    setLoading(true);
    try {
      const result = await generateMarketingCopy({
        contentType: "product_description",
        details,
        tone: "premium and appetizing"
      });
      setMarketingResult(result);
    } catch (error) {
      toast({ variant: "destructive", title: "Generation failed" });
    } finally {
      setLoading(false);
    }
  };

  const handleSeoSubmit = async () => {
    if (!pageContent) return;
    setLoading(true);
    try {
      const result = await generateSeoMetaTags({ pageContent });
      setSeoResult(result);
    } catch (error) {
      toast({ variant: "destructive", title: "Generation failed" });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({ title: "Copied to clipboard" });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Internal Tools</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Content & SEO Manager</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leverage AI to generate high-converting marketing copy and SEO-optimized meta tags for SBNB Global products.
          </p>
        </div>

        <Tabs defaultValue="marketing" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12 h-14 bg-primary/5 rounded-full p-1">
            <TabsTrigger value="marketing" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white">
              <Sparkles className="w-4 h-4 mr-2" /> Marketing Copy
            </TabsTrigger>
            <TabsTrigger value="seo" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white">
              <Search className="w-4 h-4 mr-2" /> SEO Tags
            </TabsTrigger>
          </TabsList>

          <TabsContent value="marketing">
            <Card className="border-none shadow-xl rounded-[2rem]">
              <CardHeader className="bg-primary/5 rounded-t-[2rem] p-8">
                <CardTitle className="text-2xl text-primary">Marketing Snippet Generator</CardTitle>
                <CardDescription>Enter product features to generate premium descriptions.</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Product Details / Features</label>
                  <Textarea 
                    placeholder="e.g. Organic Turmeric Powder, High Curcumin, Direct from Salem, Lab Tested..."
                    className="min-h-[120px]"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                  />
                </div>
                <Button 
                  onClick={handleMarketingSubmit} 
                  disabled={loading || !details} 
                  className="w-full h-12 bg-secondary text-primary hover:bg-primary hover:text-white"
                >
                  {loading ? "Generating..." : "Generate Marketing Copy"}
                </Button>

                {marketingResult && (
                  <div className="mt-10 space-y-6 animate-fade-in-up">
                    <h3 className="font-bold text-xl text-primary flex items-center gap-2">
                      <Layout className="w-5 h-5" /> Generated Copy
                    </h3>
                    <div className="space-y-4">
                      {marketingResult.copy.map((text: string, i: number) => (
                        <div key={i} className="p-6 bg-primary/5 rounded-2xl relative group">
                          <p className="text-lg leading-relaxed">{text}</p>
                          <button 
                            onClick={() => copyToClipboard(text)}
                            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-white rounded-lg shadow-sm"
                          >
                            <Copy className="w-4 h-4 text-primary" />
                          </button>
                        </div>
                      ))}
                    </div>
                    {marketingResult.suggestedKeywords && (
                      <div className="pt-6">
                        <h4 className="font-semibold mb-3">Suggested Keywords</h4>
                        <div className="flex flex-wrap gap-2">
                          {marketingResult.suggestedKeywords.map((kw: string) => (
                            <Badge key={kw} variant="outline" className="border-secondary text-secondary">{kw}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="seo">
             <Card className="border-none shadow-xl rounded-[2rem]">
              <CardHeader className="bg-primary/5 rounded-t-[2rem] p-8">
                <CardTitle className="text-2xl text-primary">SEO Meta Tag Generator</CardTitle>
                <CardDescription>Input page content to get optimized titles and descriptions.</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Page/Product Content</label>
                  <Textarea 
                    placeholder="Paste the main content of the page here..."
                    className="min-h-[120px]"
                    value={pageContent}
                    onChange={(e) => setPageContent(e.target.value)}
                  />
                </div>
                <Button 
                  onClick={handleSeoSubmit} 
                  disabled={loading || !pageContent} 
                  className="w-full h-12 bg-secondary text-primary hover:bg-primary hover:text-white"
                >
                  {loading ? "Optimizing..." : "Generate SEO Tags"}
                </Button>

                {seoResult && (
                  <div className="mt-10 space-y-6 animate-fade-in-up">
                    <div className="p-8 bg-primary text-white rounded-[2rem] space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-bold text-secondary uppercase tracking-widest">Meta Title</span>
                          <button onClick={() => copyToClipboard(seoResult.metaTitle)}>
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xl font-bold">{seoResult.metaTitle}</p>
                        <p className="text-xs text-white/40 mt-1">{seoResult.metaTitle.length} characters (Optimal: &lt; 60)</p>
                      </div>
                      <div className="pt-6 border-t border-white/10">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-bold text-secondary uppercase tracking-widest">Meta Description</span>
                          <button onClick={() => copyToClipboard(seoResult.metaDescription)}>
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-lg text-white/80">{seoResult.metaDescription}</p>
                        <p className="text-xs text-white/40 mt-1">{seoResult.metaDescription.length} characters (Optimal: &lt; 160)</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </main>
  );
}
