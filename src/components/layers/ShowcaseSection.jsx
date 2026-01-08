"use client";

import Image from "next/image";
import { Play, Pause, Share2, ExternalLink } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import styles from "./ShowcaseSection.module.css";

const toYouTubeWatchUrl = (youtubeId) => `https://www.youtube.com/watch?v=${youtubeId}`;
const toYouTubeEmbedUrl = (youtubeId) =>
  `https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;

const projects = [
  {
    id: 1,
    title: "Mythical Quest",
    category: "3D Animation",
    image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=600&q=80",
    student: "Rahul Sharma",
    youtubeId: "ysz5S6PUM-U",
  },
  {
    id: 2,
    title: "Cosmic Warfare",
    category: "VFX",
    image: "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=600&q=80",
    student: "Priya Patel",
    youtubeId: "ysz5S6PUM-U",
  },
  {
    id: 3,
    title: "Neon Cityscape",
    category: "Motion Graphics",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    student: "Amit Kumar",
    youtubeId: "ysz5S6PUM-U",
  },
  {
    id: 4,
    title: "Fantasy Realm",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    student: "Sneha Gupta",
    youtubeId: "ysz5S6PUM-U",
  },
  {
    id: 5,
    title: "Brand Identity",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80",
    student: "Vikram Singh",
    youtubeId: "ysz5S6PUM-U",
  },
  {
    id: 6,
    title: "Mobile App UI",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&q=80",
    student: "Neha Verma",
    youtubeId: "ysz5S6PUM-U",
  },
];

export default function ShowcaseSection() {
  const iframeRef = useRef(null);
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [shareStatus, setShareStatus] = useState(null);
  const [shareProjectId, setShareProjectId] = useState(null);

  const postToYouTubePlayer = useCallback((func) => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    win.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "*"
    );
  }, []);


  const playProject = useCallback(
    (projectId) => {
      if (activeProjectId && activeProjectId !== projectId) {
        postToYouTubePlayer("stopVideo");
      }
      setActiveProjectId(projectId);
      setIsPlaying(true);
      setShareStatus(null);
      setShareProjectId(null);
    },
    [activeProjectId, postToYouTubePlayer]
  );

  const togglePlayPause = useCallback(() => {
    if (!activeProjectId) return;
    if (isPlaying) {
      postToYouTubePlayer("pauseVideo");
      setIsPlaying(false);
    } else {
      postToYouTubePlayer("playVideo");
      setIsPlaying(true);
    }
  }, [activeProjectId, isPlaying, postToYouTubePlayer]);

  const shareVideo = useCallback(async (project) => {
    const url = toYouTubeWatchUrl(project.youtubeId);
    try {
      if (navigator.share) {
        await navigator.share({ title: project.title, url });
        setShareProjectId(project.id);
        setShareStatus("Shared");
        return;
      }

      await navigator.clipboard.writeText(url);
      setShareProjectId(project.id);
      setShareStatus("Copied");
    } catch {
      setShareProjectId(project.id);
      setShareStatus("Copy failed");
    } finally {
      window.setTimeout(() => setShareStatus(null), 1500);
    }
  }, []);

  return (
    <section id="showcase" className={styles.section}>
      {/* Background */}
      <div className={styles.backgroundGradient} />
      <div className={styles.glowCircle1} />
      <div className={styles.glowCircle2} />
      
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <button className={styles.label}>
            Student Portfolio
          </button>
          <h2 className={styles.heading}>
            <span className={styles.headingWhite}>Stunning Work by</span>
            <br />
            <span className={styles.headingGradient}>Our Creative Students</span>
          </h2>
          <p className={styles.description}>
            Explore the incredible projects created by our talented students
          </p>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${styles.projectCard} ${
                activeProjectId === project.id ? styles.projectCardActive : ""
              }`}
            >
              {/* Image */}
              <div className={styles.imageWrapper}>
                {activeProjectId === project.id ? (
                  <iframe
                    ref={iframeRef}
                    className={styles.inlineVideoIframe}
                    src={toYouTubeEmbedUrl(project.youtubeId)}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className={styles.projectImage}
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 90vw"
                    priority={false}
                  />
                )}
              </div>

              {/* Overlay */}
              {activeProjectId === project.id ? null : (
                <div className={styles.overlay} />
              )}

              {/* Content */}
              <div className={styles.content}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.studentName}>by {project.student}</p>
                
                <div className={styles.actionButtons}>
                  <button
                    type="button"
                    className={styles.actionBtn}
                    aria-label={
                      activeProjectId === project.id
                        ? isPlaying
                          ? `Pause ${project.title}`
                          : `Play ${project.title}`
                        : `Play ${project.title}`
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      if (activeProjectId === project.id) {
                        togglePlayPause();
                      } else {
                        playProject(project.id);
                      }
                    }}
                  >
                    {activeProjectId === project.id && isPlaying ? (
                      <Pause className={styles.actionIcon} />
                    ) : (
                      <Play className={styles.actionIcon} />
                    )}
                  </button>
                  <button
                    type="button"
                    className={styles.actionBtn}
                    aria-label={`Share ${project.title} video link`}
                    onClick={(e) => {
                      e.stopPropagation();
                      shareVideo(project);
                    }}
                  >
                    <Share2 className={styles.actionIcon} />
                  </button>
                </div>

                {shareStatus && shareProjectId === project.id ? (
                  <p className={styles.shareStatus} aria-live="polite">
                    {shareStatus}
                  </p>
                ) : null}
              </div>

              {/* Badge */}
              <div className={styles.badge}>
                {project.category}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className={styles.viewMoreWrapper}>
          <button className={styles.viewMoreBtn}>
            View Full Gallery
            <ExternalLink className={styles.viewMoreIcon} />
          </button>
        </div>
      </div>
    </section>
  );
}
